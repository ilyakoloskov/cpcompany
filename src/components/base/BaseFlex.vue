<template>
  <div
    :class="[
      'flex',
      {
        'flex_direction-column': column,
        'flex_direction-row': row,
        'flex_justify-center': justifyCenter,
        'flex_align-center': alignCenter,
        flex_between: spaceBetween,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseFlex',

  props: {
    column: Boolean,
    row: Boolean,
    justifyCenter: Boolean,
    alignCenter: Boolean,

    spaceBetween: Boolean,
  },
})
</script>

<style lang="scss">
.flex {
  display: flex;

  &_direction {
    &-column {
      flex-direction: column;
    }

    &-row {
      flex-direction: row;
    }
  }

  &_between {
    justify-content: space-between;
  }

  &_justify-center {
    justify-content: center;
  }

  &_align-center {
    align-items: center;
  }

  // &_direction {
  //   &-row {
  //     flex-direction: row;
  //   }

  //   &-column {
  //     flex-direction: column;
  //   }
  // }

  // &_justify {
  //   &-content {
  //     &-start {
  //       justify-content: center;
  //     }

  //     &-space-between {
  //       justify-content: space-between;
  //     }

  //     &-center {
  //       justify-content: center;
  //     }

  //     &-end {
  //       justify-content: center;
  //     }
  //   }

  //   &-items {
  //     &-start {
  //       justify-items: center;
  //     }

  //     &-center {
  //       justify-items: center;
  //     }

  //     &-end {
  //       justify-items: center;
  //     }
  //   }

  //   &-self {
  //     &-start {
  //       justify-items: center;
  //     }

  //     &-center {
  //       justify-items: center;
  //     }

  //     &-end {
  //       justify-items: center;
  //     }
  //   }
  // }

  // &_align {
  //   &-content {
  //     &-start {
  //       align-content: center;
  //     }

  //     &-center {
  //       align-content: center;
  //     }

  //     &-end {
  //       align-content: center;
  //     }
  //   }

  //   &-items {
  //     &-start {
  //       align-items: center;
  //     }

  //     &-center {
  //       align-items: center;
  //     }

  //     &-end {
  //       align-items: center;
  //     }
  //   }

  //   &-self {
  //     &-start {
  //       align-self: center;
  //     }

  //     &-center {
  //       align-self: center;
  //     }

  //     &-end {
  //       align-self: center;
  //     }
  //   }
  // }
}
</style>
