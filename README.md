## Config and install

1. Install dependencies

```bash
$ yarn
```

2. Run project

```bash
$ yarn dev
```

## Example of use

1. First of all, get your jwt token

```bash
POST - http://localhost:3000/auth

body:
{
  "email": "teste@teste.com",
  "password": "123"
}
```

2. After getting the token, list the activities

```bash
GET - http://localhost:3000/task
Header Authorization Bearer
```

3. Change the status of a task (enter the task ID in the URL parameters)

```bash
PUT - http://localhost:3000/task/1
Header Authorization Bearer

body:
{
  "status": "TO_DO" | "IN_PROGRESS" | "DONE" | "ARCHIVED"
}
```
