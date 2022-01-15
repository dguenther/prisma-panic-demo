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
   5 async function main() {
   6   const id = 111111111111111111111111111111111
   7
→  8   await prisma.user.findUnique(
  called `Option::unwrap()` on a `None` value
    at cb (D:\repos\prisma-examples\javascript\script\node_modules\@prisma\client\runtime\index.js:38695:17)
    at async main (D:\repos\prisma-examples\javascript\script\script.js:8:3) {
  clientVersion: '3.8.1'
}
```

