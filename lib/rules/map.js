"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "validate map method on native",
            category: "Possible Errors",
            recommended: true
        },
        fixable: "code",
        schema: []
    },
    create: function (context) {

        return {
            CallExpression(node) {
                if (!(node.callee.object.name === "_" && node.callee.property.name === 'map')) return;

                const firstArg = node.arguments.length && node.arguments[0] || {}
                const anotherArgs = node.arguments.length && node.arguments.slice(1) || []
                const source = context.getSourceCode()

                let sourceArgs = anotherArgs.length ? source.getText(anotherArgs[0]) : ''

                for (let i = 1; i < anotherArgs.length; i++) {
                    sourceArgs += `, ${source.getText(anotherArgs[i])}`
                }

                if (firstArg.type === 'Identifier') {
                    context.report({
                        message: 'hi',
                        node: node,
                        fix: function (fixer) {
                            const newCode = `(${firstArg.name} instanceof Array ? ${source.getText(firstArg)}.map(${sourceArgs}) : `
                            return [
                                fixer.insertTextBefore(node, newCode),
                                fixer.insertTextAfter(node, `)`)
                            ]
                        }
                    })
                } else if (firstArg.type === 'ArrayExpression') {
                    context.report({
                        message: 'hi',
                        node: node,
                        fix: function (fixer) {
                            return fixer.replaceText(node, `${source.getText(firstArg)}.map(${sourceArgs})`);
                        }
                    })
                }
            }
        };
    }
};