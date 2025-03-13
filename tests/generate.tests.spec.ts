import { BrowserContext, expect, Page, test } from '@playwright/test'
import { Workbook } from 'exceljs'
import { runSheet, runSheetEachTest } from '../src/actions'
import {
  ACTION, ACTION_FORMAT, COMMENT_FORMAT,
  DATA, FILE, humanNowDateTime, LOCATOR, PRINT_FORMAT,
  SHEET, TRACE, TRACE_FORMAT,
} from '../src/consts'
import { logAll, logSheetClose, parseInts, SHEET_TIMER, syncReadFile, syncWriteFile, TOTAL_SUMMARY, TOTAL_TIMER } from '../src/lib'

interface testcase { sheet: number; name: string | undefined; start: number; end: number; }

let wb: Workbook;
let testCases: testcase[] = [];
let page: Page;
let ctx: BrowserContext;

test.describe.serial("Test Suit", async () => {
  test.beforeAll(async ({ browser }) => {
    ctx ??= await browser.newContext();
    page ??= await ctx.newPage();
  });

  test('Load Excel File', async ({ page }) => {
    wb = new Workbook();
    await wb.xlsx.readFile(FILE!);
    // logAll('sheets: ', wb.worksheets.length)
    // wb.eachSheet((worksheet, sheetId) => {
    //   logAll(sheetId, worksheet.name);
    // })

    const sheets = parseInts(SHEET, wb)
    logAll(`Test sheets ${sheets}`)

    let idx: number = 0;
    let codeSheet = '';
    for (const sn of sheets) {
      try {
      const sheet = wb.getWorksheet(sn);
      if (!sheet) return;
      const sheetrowCount = sheet.rowCount;
      for (let i = 2; i <= sheetrowCount; i++) {
        const row = sheet.getRow(i);
        //logAll("cellsss", row.getCell(1).value?.toString());
        if (row.getCell(1).value?.toString().startsWith("Begin")) {
          idx = testCases.push({ sheet: sn, name: row.getCell(1).value?.toString(), start: i, end: i });
        } else if (row.getCell(1).value?.toString().startsWith("End")) {
          testCases[idx - 1].end = i;
        }
      }
      //logAll(testCases);

      let codeTestCase = '';
      testCases.forEach((item) => {
        codeTestCase += (
        ` test('Test for ${sheet.name}-${item.name}:Row ${item.start}-${item.end}', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(${item.sheet}), page, ctx, testInfo, ${item.start}, ${item.end})
          });
          `)
      })
      // codeSheet += (`test.describe('Run Sheet ${sheet.name}',()=>{
      //   ${codeTestCase}
      // });
      // \n`)
      codeSheet += `\n${codeTestCase} \n`;
      testCases = [];
    } catch (error) {
      logAll(error)
    }
    }
    
    //logAll(codeSheet);
    const templatefile = syncReadFile('../tests/testcase.template.spec.ts')
    let generatedtestfile = templatefile.replace('/*{{code}}*/', codeSheet)
    const outfilename =`../tests/runTestCases.spec.ts`
    syncWriteFile(outfilename, generatedtestfile)

  });
});
