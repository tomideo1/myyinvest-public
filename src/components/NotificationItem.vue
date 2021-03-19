<template>
  <div class="notification">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="105" viewBox="0 0 22 105">
        <defs>
          <filter id="Rectangle_14" x="0" y="0" width="22" height="105" filterUnits="userSpaceOnUse">
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood flood-opacity="0.239" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_14)">
          <rect id="Rectangle_14-2" data-name="Rectangle 14" width="10" height="93" rx="5" transform="translate(6 6)" :fill="color" />
        </g>
      </svg>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="55" height="60" viewBox="0 0 55 60">
        <g id="Group_39" data-name="Group 39" transform="translate(-418 -185)">
          <image
            id="Rectangle_15"
            data-name="Rectangle 15"
            width="55"
            height="60"
            transform="translate(418 185)"
            opacity="0.24"
            xlink:href="data:image/png;base64,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"
            style="mix-blend-mode: multiply;isolation: isolate"
          />
          <g id="Group_38" data-name="Group 38">
            <g id="Group_37" data-name="Group 37">
              <circle id="Ellipse_9" data-name="Ellipse 9" cx="15.349" cy="15.349" r="15.349" transform="translate(430.151 197.891)" :fill="color" />
              <text id="i" transform="translate(442.49 221.012)" fill="#fff" font-size="20.216" font-family="Poppins-SemiBold, Poppins" font-weight="600"><tspan x="0" y="0">i</tspan></text>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="notification__text">
      <p>Your investment process is complete</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex quibusdam saepe dolores fugit odit</p>
    </div>
    <button class="notification__btn-delete">
      <svg xmlns="http://www.w3.org/2000/svg" width="13.375" height="15.286" viewBox="0 0 13.375 15.286">
        <path
          id="Path_33"
          data-name="Path 33"
          d="M1022.626,174.42h.717a.359.359,0,0,0,.358-.359v-6.448a.359.359,0,0,0-.358-.359h-.717a.358.358,0,0,0-.358.359v6.448A.358.358,0,0,0,1022.626,174.42Zm4.9-10.032h-2.46l-1.015-1.692a1.434,1.434,0,0,0-1.23-.7h-3.009a1.432,1.432,0,0,0-1.229.7l-1.016,1.692h-2.46a.478.478,0,0,0-.478.478v.478a.477.477,0,0,0,.478.477h.477v10.032a1.434,1.434,0,0,0,1.433,1.433h8.6a1.434,1.434,0,0,0,1.433-1.433h0V165.821h.477a.477.477,0,0,0,.478-.477v-.478A.478.478,0,0,0,1027.522,164.388Zm-7.767-.868a.18.18,0,0,1,.154-.087h2.807a.178.178,0,0,1,.153.087l.522.868h-4.157Zm5.857,12.333h-8.6V165.821h8.6Zm-6.33-1.433H1020a.358.358,0,0,0,.358-.359v-6.448a.358.358,0,0,0-.358-.359h-.717a.359.359,0,0,0-.358.359v6.448A.359.359,0,0,0,1019.282,174.42Z"
          transform="translate(-1014.625 -162)"
          fill="#c10000"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "NotificationItem",
  props: {
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.25em;
  width: 100%;
  max-width: 37em;
  box-shadow: 0.05rem 0.03rem 0.2rem 0.1rem rgba(0, 0, 0, 0.6);
  border-radius: 0.35rem;

  &__text {
    // padding: 0.8em 0;
    max-width: 80%;

    > p {
      font-size: 1.1rem !important;

      &:first-child {
        font-weight: 600;
        margin-bottom: 0.25em;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__btn-delete {
    align-self: flex-start;
    border: none;
    background: inherit;
    padding: 0 0.5em;
  }
}
</style>
