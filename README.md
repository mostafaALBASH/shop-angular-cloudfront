## Tasks

---

### Task 3.1

1. Create a lambda function called `getProductsList` under the same Serverless config file (i.e. `serverless.yaml`) of Product Service which will be triggered by the HTTP GET method.
2. The requested URL should be `/products`.
3. The response from the lambda should be a _full_ array of products (mock data should be used - this mock data should be stored in Product Service).
4. This endpoint should be integrated with Frontend app for _PLP_ (Product List Page) representation.

### Task 3.2

1. Create a lambda function called `getProductsById` under the same Serverless config file (i.e. `serverless.yaml`) of Product Service which will be triggered by the HTTP GET method.
2. The requested URL should be `/products/{productId}` (what `productId` is in your application is up to you - productName, UUID, etc.).
3. The response from the lambda should be 1 searched product from an array of products (mock data should be used - this mock data should be stored in Product Service).
4. This endpoint is not needed to be integrated with Frontend right now.

### Task 3.3

1. Commit all your work to separate branch (e.g. `task-3` from the latest `master`) in your own repository.
2. Create a pull request to the `master` branch.
3. Submit the link to the pull request for crosscheck

- `getProducts: `https://r4908u2gh5.execute-api.us-east-1.amazonaws.com/dev/products
- `getProductById: `https://r4908u2gh5.execute-api.us-east-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73c48a80a2
