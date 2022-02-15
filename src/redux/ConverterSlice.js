import { createSlice } from "@reduxjs/toolkit";
const ex = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;
export const ConverterStore = createSlice({
  name: "Converter",
  initialState: {
    text: "",
  },
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
    },
    helpText: (state) => {
      state.text === ex ? state.text = "": state.text=ex;
    },
  },
});

export default ConverterStore.reducer;
export const { updateText,helpText } = ConverterStore.actions;
