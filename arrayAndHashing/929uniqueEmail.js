/**
 * Built-in Functions Solution
 * Hash Set - Unique Emails
 * Time O(N * K) | Space O(N)
 * https://leetcode.com/problems/unique-email-addresses
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const valid = emails.map((email) => {
    const [local, domain] = email.split("@");
    return local.split("+").shift().split(".").join("") + "@" + domain;
  });

  return new Set(valid).size;
};

/**
 * Manual Solution
 * Hash Set - Unique Emails
 * Time O(N * K) | Space O(N)
 * https://leetcode.com/problems/unique-email-addresses
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqEmails = new Set();

  for (let email of emails) {
    let cleanEmail = "";
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        cleanEmail += email.slice(i);
        break;
      } else if (email[i] === "+") {
        while (email[i] !== "@") i++;
        cleanEmail += email.slice(i);
        break;
      } else if (email[i] !== ".") {
        cleanEmail += email[i];
      }
    }

    uniqEmails.add(cleanEmail);
  }

  return uniqEmails.size;
};

/**
 * Time O(N * K) | Space O(N)
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();

  for (let email of emails) {
    let [local, domain] = email.split("@");
    local = local.split("+")[0].replace(/\./g, "");
    uniqueEmails.add(`${local}@${domain}`);
  }

  return uniqueEmails.size;
};

// /\./g is a regular expression:

// The forward slashes / at the beginning and end denote that this is a regular expression.
// \. represents a literal period. The backslash is needed because a period has a special meaning in regex (it normally means "any character"), so we escape it to treat it as a literal period.
// g at the end is a flag that stands for "global". It means the replacement should be done for all matches in the string, not just the first one.

// The second argument "" is an empty string, which is what each period will be replaced with.

// So, local.replace(/\./g, "") will remove all periods from the local part of the email address.
// For example:

// "test.email" becomes "testemail"
// "a.b.c.d" becomes "abcd"
