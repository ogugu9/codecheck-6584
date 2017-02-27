export function hello(name) {
  if (name === "world" || name === "code-check") {
    return `Hello ${name}!`;
  } else {
    return `Invalid Name: ${name}`;
  }
}
