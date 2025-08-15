# AI Review Checklist and Guidelines

## Project-Specific Patterns and Conventions

### ✅ ACCEPTED PATTERNS - Do NOT flag these as issues

#### Page Object Patterns

- **Using `expect` in Page Object methods**: Our project intentionally uses assertions within page objects for immediate validation and better error reporting
- **Importing `@playwright/test` in page objects**: This is part of our established architecture
- **Using `test.step()` in page objects**: We use test steps to create readable and traceable test execution flows
- **Assertions in page object methods**: Assertions in page objects provide immediate feedback and clearer error messages

#### Test Structure Patterns

- **Page objects containing test runner logic**: Our page objects are designed to encapsulate both actions and validations
- **Direct assertions in utility methods**: Helper methods may contain assertions for immediate validation

### ❌ DO NOT COMMENT ON

1. **Page Object Assertions**

```js
// This is ACCEPTABLE in our codebase
async assertElementVisible() {
  await test.step('Assert element is visible', async () => {
    await expect(this.element).toBeVisible();
  });
}
```

1. **Test Steps in Page Objects**

```js
// This is ACCEPTABLE in our codebase
async performAction() {
    await test.step('Performing action', async () => {
      // action implementation
    });
}
```

1. **Importing test utilities in page objects**

```js
// This is ACCEPTABLE in our codebase
import { expect, test } from '@playwright/test';
```

### 📝 NOTES FOR AI REVIEWERS

1. **Test steps are used throughout the codebase** to create structured, traceable test execution logs.

1. **Separation of concerns is maintained at a higher level** - the separation is between test scenarios (in spec files) and page interactions (in page objects), not between actions and assertions.

1. **Focus on functional correctness** rather than theoretical best practices that don't apply to our specific project structure.
