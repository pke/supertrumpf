const t = require("tap")

const selectArrayValue = require("../src/selectArrayValue")

t.test("select no item array using invalid selector", t => {
  t.is(selectArrayValue([], "2"), undefined)
  t.is(selectArrayValue([], ""), undefined)
  t.is(selectArrayValue([]), undefined)
  // Explicitly setting the `resolveSubItem` to null
  t.is(selectArrayValue([1], "0", null), undefined)
  t.is(selectArrayValue(undefined, "0"), undefined)
  // Invalid subItemResolve return
  t.is(selectArrayValue([[1,2]], "0.1", () => undefined), undefined)
  t.is(selectArrayValue([1], "0", () => undefined), undefined)

  t.end()
})

t.test("select item from array using a dot path", t => {
  t.plan(3)

  const array = [
    666,
    [1977,7]
  ]
  t.is(selectArrayValue(array, "0"), 666)
  t.is(selectArrayValue(array, "1.1"), 7)
  t.is(selectArrayValue(array, "0", item => item * 2), 666*2)
})

t.test("select sub items from objects", t => {
  t.plan(2)
  
  const array = [{ items: [1,2] }]
  t.is(selectArrayValue(array, "0.1", item => item.items || item), 2)
  t.is(selectArrayValue(array, "1.1", item => item && item.items), undefined)
})

