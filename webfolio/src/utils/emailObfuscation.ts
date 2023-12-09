// Function to encode email
export function encodeEmail(email: string): string {
  return btoa(email);
}

// Function to decode email
export function decodeEmail(encodedEmail: string): string {
  return atob(encodedEmail);
}
