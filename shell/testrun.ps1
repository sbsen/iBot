param(
    [string]$testfile,
    [string]$sheet,
    [string]$report
)
Write-Host "Setting environment variables...";
Write-Host "Excel FILE: $testfile";
$env:FILE = $testfile;
Write-Host "Excel SHEET: $sheet";
$env:SHEET = $sheet;
npx playwright test ./tests/generate.tests.spec.ts
if ($report -eq 'html') {
    #npx playwright test ./tests-generatedfiles/runTestCases.spec.ts --reporter=html --headed; 
    npx playwright test ./tests/runTestCases.spec.ts --reporter=html
}else {
    npx playwright test ./tests/runTestCases.spec.ts --reporter=dot; 
}


#Read-Host

#.\shell\testrun.ps1 -testfile "./sample-tests/sample-tests.xlsx" -sheet "1,2" -report "html"