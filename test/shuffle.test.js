const t = require("tap")

const shuffle = require("../src/shuffle")

t.test("shuffle must not mutate the handed in array", t => {
  t.plan(1)
  const items = [1,2,3]
  // Uses default Math.random but ensures the function retuns a fresh set of
  // items not a mutated reference
  // This also serves as code coverage for the shuffle functions default 
  // argument assignment
  t.isNot(shuffle(items), items)
})

t.test("shuffle cards", t => {
  t.plan(2)  
  t.same(shuffle([1,2,3], () => 1), [1,2,3])
  t.same(shuffle([1,2,3], () => 0), [2,3,1])
})
