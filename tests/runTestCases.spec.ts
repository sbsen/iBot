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
  
 test('Test for basics-Begin:Row 3-4', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 3, 4)
          });
           test('Test for basics-Begin:Row 5-6', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 5, 6)
          });
           test('Test for basics-Begin:Row 7-8', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 7, 8)
          });
           test('Test for basics-Begin:Row 9-10', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 9, 10)
          });
           test('Test for basics-Begin:Row 11-12', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 11, 12)
          });
           test('Test for basics-Begin:Row 13-14', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 13, 14)
          });
           test('Test for basics-Begin:Row 15-16', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 15, 16)
          });
           test('Test for basics-Begin:Row 17-18', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 17, 18)
          });
           test('Test for basics-Begin:Row 19-20', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 19, 20)
          });
           test('Test for basics-Begin:Row 21-22', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 21, 22)
          });
           test('Test for basics-Begin:Row 23-24', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 23, 24)
          });
           test('Test for basics-Begin:Row 25-26', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 25, 26)
          });
           test('Test for basics-Begin:Row 27-28', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 27, 28)
          });
           test('Test for basics-Begin:Row 29-30', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(1), page, ctx, testInfo, 29, 30)
          });
           

 test('Test for key-Begin:Row 3-4', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(2), page, ctx, testInfo, 3, 4)
          });
           test('Test for key-Begin:Row 5-6', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(2), page, ctx, testInfo, 5, 6)
          });
           test('Test for key-Begin:Row 7-8', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(2), page, ctx, testInfo, 7, 8)
          });
           test('Test for key-Begin:Row 9-11', async ({},testInfo) => {
            await runSheetEachTest(wb.getWorksheet(2), page, ctx, testInfo, 9, 11)
          });
           


});

 

