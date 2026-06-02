# 🧮 Calculator Project – TASKS.md

## 🚀 Phase 0: Setup

- [ ] Create project folder
- [ ] Create files:

  - [ ] `index.html`
  - [ ] `style.css`
  - [ ] `script.js`
- [ ] Link CSS & JS in HTML
- [ ] Initialize Git repo
- [ ] Make first commit ("init calculator project")

---

## 🧠 Phase 1: Core Math Logic (Console First)

- [ ] Create functions:

  - [ ] `add(a, b)`
  - [ ] `subtract(a, b)`
  - [ ] `multiply(a, b)`
  - [ ] `divide(a, b)`

    - [ ] Handle divide by 0

- [ ] Test all functions in browser console

- [ ] Create:

  - [ ] `operate(operator, a, b)`

    - [ ] Calls correct math function

---

## 🧱 Phase 2: Basic HTML Layout

- [ ] Create calculator container

- [ ] Add display area

  - [ ] Show dummy number (e.g., 0)

- [ ] Add buttons:

  - [ ] Digits (0–9)
  - [ ] Operators (+ − × ÷)
  - [ ] Equals (=)
  - [ ] Clear (C)

- [ ] Add basic layout styling (grid or flex)

---

## 🎨 Phase 3: Styling (Keep it Clean)

- [ ] Style calculator body
- [ ] Style buttons (hover + active states)
- [ ] Style display (big + readable)
- [ ] Prevent overflow in display

---

## ⚙️ Phase 4: Input Handling

- [ ] Create variables:

  - [ ] `firstNumber`
  - [ ] `secondNumber`
  - [ ] `operator`
  - [ ] `shouldResetDisplay` (important!)

- [ ] Add event listeners to:

  - [ ] Number buttons
  - [ ] Operator buttons
  - [ ] Equals button
  - [ ] Clear button

- [ ] Update display when numbers are clicked

---

## 🧩 Phase 5: Make It Actually Work

- [ ] Store first number when operator is clicked
- [ ] Store operator
- [ ] Store second number when typing continues
- [ ] On `=`:

  - [ ] Call `operate()`
  - [ ] Display result

---

## 🧠 Phase 6: Calculator Logic (THE HARD PART)

- [ ] If operator is pressed again:

  - [ ] Evaluate current expression first
  - [ ] Use result as new `firstNumber`

- [ ] Prevent:

  - [ ] Running calculation without full input
  - [ ] Double operator bugs

- [ ] Ensure:

  - [ ] Only one operation runs at a time

---

## ⚠️ Phase 7: Edge Cases / Gotchas

- [ ] Divide by 0:

  - [ ] Show error message (funny/snarky 😏)

- [ ] Pressing "=" too early:

  - [ ] Do nothing or handle safely

- [ ] Clear button:

  - [ ] Reset ALL values

- [ ] After result:

  - [ ] Typing number starts fresh (not append)

- [ ] Consecutive operators:

  - [ ] Replace operator instead of calculating

- [ ] Long decimals:

  - [ ] Round result (e.g., `toFixed()`)

---

## ✨ Phase 8: Extra Credit (Level Up)

- [ ] Decimal button (.)

  - [ ] Prevent multiple decimals

- [ ] Backspace button

  - [ ] Remove last digit

- [ ] Keyboard support:

  - [ ] Numbers
  - [ ] Operators
  - [ ] Enter (=)
  - [ ] Backspace
  - [ ] Escape (clear)

---

## 🧪 Phase 9: Testing

- [ ] Test flows:

  - [ ] `12 + 7 = 19`
  - [ ] `12 + 7 - 1 = 18`
  - [ ] Multiple operations chain

- [ ] Test edge cases:

  - [ ] Spam operators
  - [ ] Divide by 0
  - [ ] Long numbers
  - [ ] Decimal input

---

## 📦 Phase 10: Polish & Finish

- [ ] Clean code (rename variables, organize functions)
- [ ] Add comments (only where needed)
- [ ] Final UI tweaks
- [ ] Commit final version
- [ ] Push to GitHub 🚀

---

## 🧠 Bonus Tips

- Don’t rush the logic — this is the real challenge
- Use `console.log()` A LOT
- Break problems into tiny steps
- If stuck: simulate calculator on paper

---

## 🏁 DONE WHEN

- [ ] All buttons work
- [ ] Logic is solid (no weird bugs)
- [ ] UI looks decent
- [ ] You understand HOW it works

🔥 Congrats. You just built a real app.
