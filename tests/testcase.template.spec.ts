import { BrowserContext, expect, Page, test } from '@playwright/test'
import { Workbook } from 'exceljs'
import { runSheet, runSheetEachTest } from '../src/actions'
import {
  ACTION, ACTION_FORMAT, COMMENT_FORMAT,
  DATA, FILE, humanNowDateTime, LOCATOR, PRINT_FORMAT,
  SHEET, TRACE, TRACE_FORMAT,
} from '../src/consts'
import { logAll, logSheetClose, parseInts, SHEET_TIMER, TOTAL_SUMMARY, TOTAL_TIMER } from '../src/lib'

interface testcase { sheet: number; name: string | undefined; start: number; end: number; }

let wb: Workbook;
let testCases: testcase[] = [];
let page: Page;
let ctx: BrowserContext;

test.describe.serial("Test Suit", async () => {
  test.beforeAll(async ({ browser }) => {
    ctx ??= await browser.newContext();
    page ??= await ctx.newPage();

    wb = new Workbook();
    await wb.xlsx.readFile(FILE!);

    // logAll('sheets: ', wb.worksheets.length)
    // wb.eachSheet((worksheet, sheetId) => {
    //   logAll(sheetId, worksheet.name);
    // })
  });

  // test('Load Excel File', async ({ page }) => {
  //   wb = new Workbook();
  //   await wb.xlsx.readFile(FILE!);

  //   logAll('sheets: ', wb.worksheets.length)
  //   wb.eachSheet((worksheet, sheetId) => {
  //     logAll(sheetId, worksheet.name);
  //   })
  // });

  //Placeholder for the generated code 
  /*{{code}}*/

});

 

