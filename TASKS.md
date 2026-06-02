# 🧮 Calculator Project – TASKS.md

## 🚀 Phase 0: Setup

- [X] Create project folder
- [X] Create files:

  - [X] `index.html`
  - [X] `style.css`
  - [X] `script.js`
- [X] Link CSS & JS in HTML
- [X] Initialize Git repo
- [X] Make first commit ("init calculator project")

---

## 🧠 Phase 1: Core Math Logic (Console First)

- [X] Create functions:

  - [X] `add(a, b)`
  - [X] `subtract(a, b)`
  - [X] `multiply(a, b)`
  - [X] `divide(a, b)`

    - [X] Handle divide by 0

- [X] Test all functions in browser console

- [X] Create:

  - [X] `operate(operator, a, b)`

    - [X] Calls correct math function

---

## 🧱 Phase 2: Basic HTML Layout

- [X] Create calculator container

- [X] Add display area

  - [X] Show dummy number (e.g., 0)

- [X] Add buttons:

  - [X] Digits (0–9)
  - [X] Operators (+ − × ÷)
  - [X] Equals (=)
  - [X] Clear (C)

- [X] Add basic layout styling (grid or flex)

---

## 🎨 Phase 3: Styling (Keep it Clean)

- [X] Style calculator body
- [X] Style buttons (hover + active states)
- [X] Style display (big + readable)
- [X] Prevent overflow in display

---

## ⚙️ Phase 4: Input Handling

- [X] Create variables:

  - [X] `firstNumber`
  - [X] `secondNumber`
  - [X] `operator`
  - [X] `shouldResetDisplay` (important!)

- [X] Add event listeners to:

  - [X] Number buttons
  - [X] Operator buttons
  - [X] Equals button
  - [X] Clear button

- [X] Update display when numbers are clicked

---

## 🧩 Phase 5: Make It Actually Work

- [X] Store first number when operator is clicked
- [X] Store operator
- [X] Store second number when typing continues
- [X] On `=`:

  - [X] Call `operate()`
  - [X] Display result

---

## 🧠 Phase 6: Calculator Logic (THE HARD PART)

- [X] If operator is pressed again:

  - [X] Evaluate current expression first
  - [X] Use result as new `firstNumber`

- [X] Prevent:

  - [X] Running calculation without full input
  - [X] Double operator bugs

- [ ] Ensure:

  - [ ] Only one operation runs at a time

---

## ⚠️ Phase 7: Edge Cases / Gotchas

- [X] Divide by 0:

  - [X] Show error message (funny/snarky 😏)

- [X] Pressing "=" too early:

  - [X] Do nothing or handle safely

- [X] Clear button:

  - [X] Reset ALL values

- [X] After result:

  - [X] Typing number starts fresh (not append)

- [X] Consecutive operators:

  - [X] Replace operator instead of calculating

- [X] Long decimals:

  - [X] Round result (e.g., `toFixed()`)

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

- [X] Test flows:

  - [X] `12 + 7 = 19`
  - [X] `12 + 7 - 1 = 18`
  - [X] Multiple operations chain

- [X] Test edge cases:

  - [X] Spam operators
  - [X] Divide by 0
  - [X] Long numbers
  - [X] Decimal input

---

## 📦 Phase 10: Polish & Finish

- [X] Clean code (rename variables, organize functions)
- [X] Add comments (only where needed)
- [X] Final UI tweaks
- [X] Commit final version
- [X] Push to GitHub 🚀

---

## 🧠 Bonus Tips

- Don’t rush the logic — this is the real challenge
- Use `console.log()` A LOT
- Break problems into tiny steps
- If stuck: simulate calculator on paper

---

## 🏁 DONE WHEN

- [X] All buttons work
- [X] Logic is solid (no weird bugs)
- [X] UI looks decent
- [X] You understand HOW it works

🔥 Congrats. You just built a real app.
