import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import newlines	from 'eslint-plugin-import-newlines'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export default defineConfig({
	plugins: {
		'@typescript-eslint': typescriptEslint,
		'simple-import-sort': simpleImportSort,
		unicorn,
		'@stylistic': stylistic,
		newlines
	},

	languageOptions: {
		globals: {
			...globals.browser,
		},
		parser: tsParser,
		ecmaVersion: 5,
		sourceType: 'module',
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		}
	},

	rules: {
		'unicorn/no-for-each': ['error'],

		'unicorn/consistent-function-scoping': ['error', {
			checkArrowFunctions: false,
		}],

		'unicorn/no-await-expression-member': 'error',
		'unicorn/no-for-loop': 'error',
		'unicorn/no-lonely-if': 'error',
		'unicorn/no-object-as-default-parameter': 'error',
		'unicorn/prefer-array-find': 'error',
		'unicorn/prefer-array-some': 'error',
		'max-depth': ['error', 4],

		'@typescript-eslint/no-misused-promises': ['error', {
			checksSpreads: true,
			checksVoidReturn: false,
			checksConditionals: true,
		}],

		'@typescript-eslint/prefer-optional-chain': ['error'],
		'@typescript-eslint/no-unnecessary-type-assertion': ['error'],
		'@typescript-eslint/no-unnecessary-type-constraint': ['error'],
		'@typescript-eslint/no-redundant-type-constituents': ['error'],
		'@typescript-eslint/no-inferrable-types': ['error'],

		'@typescript-eslint/no-explicit-any': ['warn', {
			ignoreRestArgs: true,
		}],

		'@stylistic/type-annotation-spacing': ['error'],
		'@stylistic/max-len': ['error', { code: 80, tabWidth: 2 }],

		'@stylistic/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'none',
				requireLast: false,
			},

			singleline: {
				delimiter: 'comma',
				requireLast: false,
			},
		}],

		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/consistent-type-imports': ['error'],

		camelcase: ['error', {
			ignoreGlobals: true,
			ignoreImports: true,
		}],

		'no-unneeded-ternary': ['error'],

		'no-restricted-syntax': ['error', {
			selector: 'TSEnumDeclaration',
			message: "Don't declare enums, use literals instead",
		}],

		'no-constant-condition': ['error'],
		'no-constant-binary-expression': 'error',
		'@stylistic/no-trailing-spaces': 'error',
		'@stylistic/no-multi-spaces': 'error',
		'@stylistic/space-infix-ops': 'error',
		'@stylistic/indent': ['error', 'tab'],

		'@stylistic/quotes': [2, 'single', {
			avoidEscape: true,
		}],

		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/space-in-parens': ['error', 'never'],
		curly: [2, 'all'],
		'@stylistic/brace-style': ['error'],
		'@stylistic/linebreak-style': ['error', 'unix'],
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/space-before-function-paren': ['error', 'never'],

		'@stylistic/keyword-spacing': ['error', {
			overrides: {
				if: {
					after: false,
				},

				for: {
					after: false,
				},

				while: {
					after: false,
				},

				catch: {
					after: false,
				},
			},
		}],

		'@stylistic/padding-line-between-statements': ['error', {
			blankLine: 'always',
			prev: 'function',
			next: '*',
		}, {
			blankLine: 'always',
			prev: 'block-like',
			next: '*',
		}, {
			blankLine: 'always',
			prev: 'import',
			next: 'block-like',
		}],

		eqeqeq: 'error',
		'func-names': ['error', 'never'],

		'func-style': ['error', 'declaration', {
			allowArrowFunctions: true,
		}],

		'prefer-const': 'error',
		'prefer-arrow-callback': 'error',
		'@stylistic/arrow-spacing': ['error'],
		'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
		'@stylistic/no-multiple-empty-lines': 'error',
		'@stylistic/space-before-blocks': 'error',
		'@stylistic/comma-spacing': 'error',
		'no-unused-vars': 'off',
		'@stylistic/jsx-quotes': ['error', 'prefer-single'],

		'simple-import-sort/imports': ['error', {
			groups: [[
				'^react',
				'^@?\\w',
				'^(components|modules|utils)(/.*|$)',
				'^\\u0000',
				'^\\.\\.(?!/?$)',
				'^\\.\\./?$',
				'^\\./(?=.*/)(?!/?$)',
				'^\\.(?!/?$)',
				'^\\./?$',
			]],
		}],

		'@stylistic/jsx-curly-brace-presence': ['error', {
			props: 'never',
			children: 'never',
		}],

		'@stylistic/jsx-self-closing-comp': 'error',
		'@stylistic/jsx-closing-tag-location': 'error',
		'@stylistic/jsx-equals-spacing': ['error', 'never'],

		'@stylistic/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
		}],

		'@stylistic/jsx-curly-newline': ['error', {
			multiline: 'require',
			singleline: 'forbid',
		}],

		'@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
		'@stylistic/jsx-max-props-per-line': 'error',
		'@stylistic/jsx-one-expression-per-line': 'error',

		'@stylistic/jsx-wrap-multilines': ['error', {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'ignore',
		}],
		'newlines/enforce': [
			'error',
			{
				'max-len': 80,
				'semi': false
			}
		]
	},
})
