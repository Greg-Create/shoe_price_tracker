import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "16px",
  },

  sizes:{
sm:{
    fontSize:"8pt",
},
md:{
    fontSize:"10pt",
}
  },

  variants: {
    solid: {
      color: "white",
      bg: "rgb(217,79,112)",
      _hover: {
        color: "white",
        bg: "rgb(217,79,112)",
        opacity:'0.7'
      },

      _active: {
        bg: "#EB7676",
        color: "white",
      },
    },

    outline: {
      bg: "white",
      color: "rgb(217,79,112)",
      borderColor: "rgb(217,79,112)",
      _hover: {
        opacity: "0.7",
      },
      _active: {
        bg: "#F1E1E1",
        color: "red",
      },
    },

    oauth:{
      height:"40px",
      border:"1px solid",
      borderColor:"gray.300",
      _hover:{
        bg:"gray.50"
      }
    }
  },
};
