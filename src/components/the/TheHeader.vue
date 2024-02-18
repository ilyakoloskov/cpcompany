<template>
  <!-- HEADER -->
  <header
    :class="['header', { header_scrolled: isActive }]"
    @mousemove="isActive = true"
    @mouseleave="isActive = false"
  >
    <base-container
      class="header__container"
      m
    >
      <base-flex
        class="header__wrapper"
        space-between
        align-center
      >
        <router-link
          class="header__logo logo"
          to="/about"
        >
          <base-icon
            class="logo__icon header__logo-icon"
            :viewBox="`0 0 104 60`"
            :width="104"
            :height="60"
            :color="isActive ? '#000' : '#fff'"
          >
            <icon-logo />
          </base-icon>
        </router-link>
        <nav class="header__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link
                class="nav__link"
                to="/product"
                >Каталог
              </router-link>
            </li>
          </ul>
        </nav>
      </base-flex>
    </base-container>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

// import { mapState } from 'pinia'
// import { useGlobalStore } from '@/store/globalStore'

import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseFlex from '@/components/base/BaseFlex.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

import IconLogo from '@/components/icons/IconLogo.vue'

export default defineComponent({
  name: 'TheHeader',
  components: {
    BaseContainer,
    BaseFlex,
    BaseIcon,

    IconLogo,
  },
  data() {
    return {
      isActive: false,
      windowTop: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  // computed: {
  //   ...mapState(useGlobalStore, ['products']),
  // },

  methods: {
    onScroll() {
      this.windowTop = window.scrollY
    },
  },
  watch: {
    windowTop() {
      this.windowTop ? (this.isActive = true) : (this.isActive = false)
    },
  },
})
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  background-color: rgba(var(--secondary-rgb), 0.16);

  transition: var(--transition);

  &__wrapper {
    padding: 18.5px 0;
  }

  &_scrolled,
  &:hover {
    background-color: rgba(var(--primary-rgb), 1);
    transition: var(--transition);
  }

  &__logo {
    &-icon {
      &_light {
        color: var(--primary);
      }
    }
  }
}
</style>
