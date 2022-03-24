import { AnimatePresence, motion } from "framer-motion";

const duration1 = .25
const duration2 = .75
export const variants_X_100_to_0 = {
  hidden: {
    x: "100%",
    transition: {
      duration: duration1
    }
  },
  visible: {
    x: 0,
    transition: {
      duration: duration1
    }
  },
  exit: {
    x: "100%",
    transition: {
      duration: duration1
    }
  },
}
export const variants_X_0_to_100 = {
  hidden: {
    x: 0,
    transition: {
      duration: 2
    }
  },
  visible: {
    x: '100%',
    transition: {
      duration: 2
    }
  },
  exit: {
    x: 0,
    transition: {
      duration: 2
    }
  },
}
export const variants_X_M100_to_0 = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: duration1
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration1
    },
  },
  exit: {
    opacity: 0,
    // x: "-100%",
    transition: {
      duration: duration2
    },
  }
}

export const variantsOpacity = {
  hidden: {
    opacity: 0,
    transition: {
      duration: duration1
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration1
    }
  }
}