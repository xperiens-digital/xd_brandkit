# FormFields

Form controls with a soft `brand-tint` focus halo and springy checks.

**Structure.** Wrap each control in `.xd-field` with an `.xd-label`; add `.xd-hint` for help text and `.xd-field--error` (plus `aria-invalid` and `aria-describedby` pointing at the hint) for validation. Checkbox and radio: `.xd-check > input`; switch: `input.xd-toggle[role=switch]`.

**Alignment (always use `.xd-form`).** Lay fields out in an `.xd-form` grid, never an ad hoc flex row or a grid with `align-items: center/end`. Every field is three rows: label, control, message. `.xd-form` shares those rows across each line of fields (CSS subgrid), so:
- controls in the same row line up even when one label wraps to two lines;
- a hint or validation message never pushes its control out of line with its neighbours;
- the message row is always reserved (`--xd-field-msg-lh`), so showing an error never shifts the layout.

Columns: `--xd-form-cols` (default 2; drops to 1 under 640px). Full-width items: `.xd-field--full`, or `.xd-form__full` for non-field rows such as a row of checks. Any other direct child of `.xd-form` spans one field's three rows.

**Tokens.** `--xd-field-gap` (8px, label to control to message), `--xd-field-label-lh` (20px), `--xd-field-msg-lh` (18px, one line of hint text), `--xd-form-col-gap` (20px), `--xd-form-row-gap` (12px). Keep labels and messages to these line heights; never give a message its own margin.
