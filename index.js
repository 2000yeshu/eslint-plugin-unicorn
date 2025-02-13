'use strict';
const createDeprecatedRules = require('./rules/utils/create-deprecated-rules.js');
const {loadRules} = require('./rules/utils/rule.js');

const deprecatedRules = createDeprecatedRules({
	// {ruleId: ReplacementRuleId | ReplacementRuleId[]}, if no replacement, use `{ruleId: []}`
	'no-array-instanceof': 'unicorn/no-instanceof-array',
	'no-fn-reference-in-iterator': 'unicorn/no-array-callback-reference',
	'no-reduce': 'unicorn/no-array-reduce',
	'prefer-dataset': 'unicorn/prefer-dom-node-dataset',
	'prefer-event-key': 'unicorn/prefer-keyboard-event-key',
	'prefer-exponentiation-operator': 'prefer-exponentiation-operator',
	'prefer-flat-map': 'unicorn/prefer-array-flat-map',
	'prefer-node-append': 'unicorn/prefer-dom-node-append',
	'prefer-node-remove': 'unicorn/prefer-dom-node-remove',
	'prefer-replace-all': 'unicorn/prefer-string-replace-all',
	'prefer-starts-ends-with': 'unicorn/prefer-string-starts-ends-with',
	'prefer-text-content': 'unicorn/prefer-dom-node-text-content',
	'prefer-trim-start-end': 'unicorn/prefer-string-trim-start-end',
	'regex-shorthand': 'unicorn/better-regex',
});

module.exports = {
	rules: {
		...loadRules(),
		...deprecatedRules,
	},
	configs: {
		recommended: {
			env: {
				es6: true,
			},
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
			plugins: [
				'unicorn',
			],
			rules: {
				'unicorn/better-regex': 'error',
				'unicorn/catch-error-name': 'error',
				'unicorn/consistent-destructuring': 'error',
				'unicorn/consistent-function-scoping': 'error',
				'unicorn/custom-error-definition': 'off',
				'unicorn/empty-brace-spaces': 'error',
				'unicorn/error-message': 'error',
				'unicorn/escape-case': 'error',
				'unicorn/expiring-todo-comments': 'error',
				'unicorn/explicit-length-check': 'error',
				'unicorn/filename-case': 'error',
				'unicorn/import-index': 'off',
				'unicorn/import-style': 'error',
				'unicorn/new-for-builtins': 'error',
				'unicorn/no-abusive-eslint-disable': 'error',
				'unicorn/no-array-callback-reference': 'error',
				'unicorn/no-array-for-each': 'error',
				'unicorn/no-array-method-this-argument': 'error',
				'unicorn/no-array-push-push': 'error',
				'unicorn/no-array-reduce': 'error',
				'unicorn/no-console-spaces': 'error',
				'unicorn/no-document-cookie': 'error',
				'unicorn/no-for-loop': 'error',
				'unicorn/no-hex-escape': 'error',
				'unicorn/no-instanceof-array': 'error',
				'unicorn/no-invalid-remove-event-listener': 'error',
				'unicorn/no-keyword-prefix': 'off',
				'unicorn/no-lonely-if': 'error',
				'no-nested-ternary': 'off',
				'unicorn/no-nested-ternary': 'error',
				'unicorn/no-new-array': 'error',
				'unicorn/no-new-buffer': 'error',
				'unicorn/no-null': 'error',
				'unicorn/no-object-as-default-parameter': 'error',
				'unicorn/no-process-exit': 'error',
				'unicorn/no-static-only-class': 'error',
				'unicorn/no-this-assignment': 'error',
				'unicorn/no-unreadable-array-destructuring': 'error',
				'unicorn/no-unsafe-regex': 'off',
				'unicorn/no-unused-properties': 'off',
				'unicorn/no-useless-fallback-in-spread': 'error',
				'unicorn/no-useless-length-check': 'error',
				'unicorn/no-useless-spread': 'error',
				'unicorn/no-useless-undefined': 'error',
				'unicorn/no-zero-fractions': 'error',
				'unicorn/number-literal-case': 'error',
				'unicorn/numeric-separators-style': 'error',
				'unicorn/prefer-add-event-listener': 'error',
				'unicorn/prefer-array-find': 'error',
				'unicorn/prefer-array-flat': 'error',
				'unicorn/prefer-array-flat-map': 'error',
				'unicorn/prefer-array-index-of': 'error',
				'unicorn/prefer-array-some': 'error',
				// TODO: Enable this by default when targeting a Node.js version that supports `Array#at`.
				'unicorn/prefer-at': 'off',
				'unicorn/prefer-date-now': 'error',
				'unicorn/prefer-default-parameters': 'error',
				'unicorn/prefer-dom-node-append': 'error',
				'unicorn/prefer-dom-node-dataset': 'error',
				'unicorn/prefer-dom-node-remove': 'error',
				'unicorn/prefer-dom-node-text-content': 'error',
				'unicorn/prefer-includes': 'error',
				'unicorn/prefer-keyboard-event-key': 'error',
				'unicorn/prefer-math-trunc': 'error',
				'unicorn/prefer-modern-dom-apis': 'error',
				'unicorn/prefer-module': 'error',
				'unicorn/prefer-negative-index': 'error',
				'unicorn/prefer-node-protocol': 'error',
				'unicorn/prefer-number-properties': 'error',
				'unicorn/prefer-object-from-entries': 'error',
				// TODO: Enable this by default when targeting a Node.js version that supports `Object.hasOwn`.
				'unicorn/prefer-object-has-own': 'off',
				'unicorn/prefer-optional-catch-binding': 'error',
				'unicorn/prefer-prototype-methods': 'error',
				'unicorn/prefer-query-selector': 'error',
				'unicorn/prefer-reflect-apply': 'error',
				'unicorn/prefer-regexp-test': 'error',
				'unicorn/prefer-set-has': 'error',
				'unicorn/prefer-spread': 'error',
				// TODO: Enable this by default when targeting Node.js 16.
				'unicorn/prefer-string-replace-all': 'off',
				'unicorn/prefer-string-slice': 'error',
				'unicorn/prefer-string-starts-ends-with': 'error',
				'unicorn/prefer-string-trim-start-end': 'error',
				'unicorn/prefer-switch': 'error',
				'unicorn/prefer-ternary': 'error',
				// TODO: Enable this by default when targeting Node.js 14.
				'unicorn/prefer-top-level-await': 'off',
				'unicorn/prefer-type-error': 'error',
				'unicorn/prevent-abbreviations': 'error',
				'unicorn/require-array-join-separator': 'error',
				'unicorn/require-number-to-fixed-digits-argument': 'error',
				'unicorn/require-post-message-target-origin': 'error',
				'unicorn/string-content': 'off',
				'unicorn/throw-new-error': 'error',
			},
			overrides: [
				{
					files: ['*.ts', '*.tsx'],
					rules: {
						'unicorn/require-post-message-target-origin': 'off',
					},
				},
			],
		},
	},
};
