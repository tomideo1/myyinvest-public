<template>
  <span :style="active ? 'filter: invert(80%) sepia(40%) saturate(4178%) hue-rotate(338deg) brightness(101%) contrast(98%);' : ''" :class="`icon icon-${size}`" :id="name" v-on="$listeners">
    <bell v-if="name === 'bell'"></bell>
    <logo-min v-if="name === 'logo-min'"></logo-min>
    <home v-if="name === 'home'"></home>
    <cog v-if="name === 'cog'"></cog>
    <phone v-if="name === 'phone'"></phone>
    <profile v-if="name === 'profile'"></profile>
    <wallet v-if="name === 'wallet'"></wallet>
    <portfolio v-if="name === 'portfolio'"></portfolio>
    <money v-if="name === 'money'"></money>
    <atm-card v-if="name === 'atm-card'"></atm-card>
    <assets v-if="name === 'assets'"></assets>
    <toggle v-if="name === 'toggle'"></toggle>
    <shield v-if="name === 'shield'"></shield>
    <eye v-if="name === 'eye'"></eye>
    <clock v-if="name === 'clock'"></clock>
    <building v-if="name === 'building'"></building>
    <naira v-if="name === 'naira'"></naira>
    <roi v-if="name === 'roi'"></roi>
    <security-asset v-if="name === 'security-asset'"></security-asset>
    <success v-if="name === 'success'"></success>
    <error v-if="name === 'error'"></error>
    <empty-noty v-if="name === 'empty-noty'"></empty-noty>
    <trans-icon v-if="name === 'trans-icon'"></trans-icon>
    <gift-card v-if="name === 'gift-card'"></gift-card>
    <socials v-if="name === 'socials'" :refText="refText" :refLink="refLink"></socials>
    <camera v-if="name === 'camera'"></camera>
    <attachment v-if="name === 'attachment'"></attachment>
    <bank-card v-if="name === 'bank-card'"></bank-card>
    <vector-dots v-if="name === 'vector-dots'"></vector-dots>
    <close v-if="name === 'close'"></close>
    <tooltip v-if="name === 'tooltip'" :ttpColor="ttpColor"></tooltip>
    <caret-right v-if="name === 'caret-right'"></caret-right>
    <database v-if="name === 'database'"></database>
    <reload v-if="name === 'reload'"></reload>
    <money-blue v-if="name === 'money-blue'"></money-blue>
    <total v-if="name === 'total'"></total>
    <green-naira v-if="name === 'green-naira'"></green-naira>
    <back-caret v-if="name === 'back-caret'"></back-caret>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: String
    },
    active: {
      type: Boolean
    },
    refText: {
      type: String,
      required: false
    },
    refLink: {
      type: String,
      required: false
    },
    ttpColor: {
      type: String,
      required: false
    }
  },
  components: {
    Bell: () => import("@/components/__private__/media/bell"),
    LogoMin: () => import("@/components/__private__/media/logo"),
    Home: () => import("@/components/__private__/media/home"),
    Profile: () => import("@/components/__private__/media/profile"),
    Cog: () => import("@/components/__private__/media/cog"),
    Portfolio: () => import("@/components/__private__/media/portfolio"),
    Money: () => import("@/components/__private__/media/money"),
    Wallet: () => import("@/components/__private__/media/wallet"),
    AtmCard: () => import("@/components/__private__/media/atmCard"),
    Assets: () => import("@/components/__private__/media/assets"),
    Phone: () => import("@/components/__private__/media/phone"),
    Toggle: () => import("@/components/__private__/media/toggle"),
    Shield: () => import("@/components/__private__/media/shield"),
    Eye: () => import("@/components/__private__/media/eye"),
    Clock: () => import("@/components/__private__/media/clock"),
    Roi: () => import("@/components/__private__/media/roi"),
    Naira: () => import("@/components/__private__/media/naira"),
    Building: () => import("@/components/__private__/media/building"),
    securityAsset: () => import("@/components/__private__/media/securityAsset"),
    Success: () => import("@/components/__private__/media/success"),
    Error: () => import("@/components/__private__/media/error"),
    emptyNoty: () => import("@/components/__private__/media/emptyNoty"),
    transIcon: () => import("@/components/__private__/media/transIcon"),
    giftCard: () => import("@/components/__private__/media/giftCard"),
    socials: () => import("@/components/__private__/media/socials"),
    camera: () => import("@/components/__private__/media/camera"),
    attachment: () => import("@/components/__private__/media/attachment"),
    bankCard: () => import("@/components/__private__/media/bankCard"),
    vectorDots: () => import("@/components/__private__/media/vectorDots"),
    close: () => import("@/components/__private__/media/close"),
    tooltip: () => import("@/components/__private__/media/tooltip"),
    caretRight: () => import("@/components/__private__/media/caretRight"),
    total: () => import("@/components/__private__/media/total"),
    reload: () => import("@/components/__private__/media/greenReload"),
    moneyBlue: () => import("@/components/__private__/media/blueMoney"),
    database: () => import("@/components/__private__/media/database"),
    greenNaira: () => import("@/components/__private__/media/greenNaira"),
    backCaret: () => import("@/components/__private__/media/backCaret")
  }
};
</script>

<style lang="scss">
.icon {
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  font-size: calc(100% + 2px);
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
  * {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
  &-xl {
    height: 2.25em;
    width: 2.25em;
    transform: scale(1.3);
  }
  &-lg {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
  }
  &-retain {
    width: 100%;
    height: 100%;
  }
  &-md {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  &-sm {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-xs {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
