const t = require("tap")

const selectCategory = require("../src/selectCategory")

t.test("flatten nested catagory", t => {
  t.plan(2)

  const categories = [
    {
      "text": "Betriebszeit (geplant)",
      "categories": [
        {
          "win": "<",
          "text": "von"
        },
        {
          "win": ">",
          "text": "bis"
        }
      ]
    },
    {
      "text": "Bruttoleistung",
      "win": ">",
      "unit": "MW"
    }
  ]

  t.same(selectCategory(categories, "0.1"), categories[0].categories[1])
  t.same(selectCategory(categories, "1"), categories[1])
})
