# Prisma Panic Demo

Reproduction for https://github.com/prisma/prisma/issues/10586. Based on https://github.com/prisma/prisma-examples/tree/latest/javascript/script

## Getting started

Install npm dependencies:
```
npm install
```

### 2. Create the database

Run the following command to create your SQLite database file. This also creates the `User` table that is defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

### 3. Run the script

Execute the script with this command:

```
npm run dev
```

### 4. Expected error

The following error should display when running the script:

```
Query #1 (id = 1.1111111111111111e+21):

thread 'tokio-runtime-worker' panicked at 'called `Option::unwrap()` on a `None` value', query-engine\core\src\query_document\parser.rs:250:87
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
PrismaClientUnknownRequestError: 
Invalid `prisma.user.findUnique()` invocation in
D:\repos\prisma-panic-demo\script.js:11:21

   8 async function query(number, id) {
   9   console.log(`\nQuery #${number} (id = ${id}):\n`)
  10
→ 11   await prisma.user.findUnique(
  called `Option::unwrap()` on a `None` value
    at cb (D:\repos\prisma-panic-demo\node_modules\@prisma\client\runtime\index.js:38695:17)
    at async query (D:\repos\prisma-panic-demo\script.js:11:3) {
  clientVersion: '3.8.1'
}

Query #2 (id = 1):

PrismaClientRustPanicError:
Invalid `prisma.user.findUnique()` invocation in
D:\repos\prisma-panic-demo\script.js:11:21

   8 async function query(number, id) {
   9   console.log(`\nQuery #${number} (id = ${id}):\n`)
  10
→ 11   await prisma.user.findUnique(
  PANIC: called `Option::unwrap()` on a `None` value in query-engine\core\src\query_document\parser.rs:250:87

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

https://github.com/prisma/prisma/issues/new?body=Hi+Prisma+Team%21+My+Prisma+Client+just+crashed.+This+is+the+report%3A%0A%23%23+Versions%0A%0A%7C+Name++++++++++++%7C+Version++++++++++++%7C%0A%7C-----------------%7C--------------------%7C%0A%7C+Node++++++++++++%7C+v16.13.0+++++++++++%7C+%0A%7C+OS++++++++++++++%7C+windows++++++++++++%7C%0A%7C+Prisma+Client+++%7C+3.8.1++++++++++++++%7C%0A%7C+Query+Engine++++%7C+0.1.0++++++++++++++%7C%0A%7C+Database++++++++%7C+sqlite+++++++++++++%7C%0A%0A%0A%0A%23%23+Logs%0A%60%60%60%0A++prisma%3AtryLoadEnv+Environment+variables+not+found+at+null++%0A++prisma%3AtryLoadEnv+Environment+variables+not+found+at+undefined++%0A++prisma%3AtryLoadEnv+No+Environment+variables+loaded++%0A++prisma%3AtryLoadEnv+Environment+variables+not+found+at+null++%0A++prisma%3AtryLoadEnv+Environment+variables+not+found+at+undefined++%0A++prisma%3AtryLoadEnv+No+Environment+variables+loaded++%0A++prisma%3Aclient+clientVersion%3A+3.8.1++%0A++prisma%3Aclient+clientEngineType%3A+library++%0A++prisma%3Aclient%3AlibraryEngine+internalSetup++%0A++prisma%3Aclient%3AlibraryEngine+Searching+for+Query+Engine+Library+in+D%3A%5Crepos%5Cprisma-panic-demo%5Cnode_modules%5C.prisma%5Cclient++%0A++prisma%3Aclient%3AlibraryEngine+loadEngine+using+D%3A%5Crepos%5Cprisma-panic-demo%5Cnode_modules%5C.prisma%5Cclient%5Cquery_engine-windows.dll.node++%0A++prisma%3Aclient%3AlibraryEngine+sending+request%2C+this.libraryStarted%3A+false++%0A++prisma%3Aclient%3AlibraryEngine+library+starting++%0A++prisma%3Aclient%3AlibraryEngine+library+started++%0A%60%60%60%0A%0A%23%23+Client+Snippet%0A%60%60%60ts%0A%2F%2F+PLEASE+FILL+YOUR+CODE+SNIPPET+HERE%0A%60%60%60%0A%0A%23%23+Schema%0A%60%60%60prisma%0A%2F%2F+PLEASE+ADD+YOUR+SCHEMA+HERE+IF+POSSIBLE%0A%60%60%60%0A%0A%23%23+Prisma+Engine+Query%0A%60%60%60%0A%7B%22X%22%3A%7B%7D%7D%0A%60%60%60%0A&title=PANIC%3A+called+%60Option%3A%3Aunwrap%28%29%60+on+a+%60None%60+value+in+query-engine%5Ccore%5Csrc%5Cquery_document%5Cparser.rs%3A250%3A87&template=bug_report.md

If you want the Prisma team to look into it, please open the link above 🙏
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue.

    at cb (D:\repos\prisma-panic-demo\node_modules\@prisma\client\runtime\index.js:38699:17)
    at async query (D:\repos\prisma-panic-demo\script.js:11:3) {
  clientVersion: '3.8.1'
}
```

