<template>
  <q-card class="option-card" flat>
    <q-card-section class="row items-center justify-center">
      <q-icon name="img:images/caption.png" size="50px" />
    </q-card-section>
    <q-card-section class="text-center">
      <div class="text-h6">MeetSpeak</div>
      <div class="text-body">
        Speak lets you use speech-to-text to provide live captions for
        presentations
      </div>
    </q-card-section>
    <q-card-section>
      <q-select
        v-model="model"
        use-input
        input-debounce="0"
        @filter="filterFn"
        :options="options"
        label="Languaes"
        dense
        emit-value
        map-options
      />
    </q-card-section>
    <q-separator />
    <q-card-actions align="around">
      <q-btn
        flat
        label="Start"
        color="primary"
        :disable="played"
        @click="startFn"
      />
      <q-btn
        flat
        label="Stop"
        color="negative"
        :disable="!played"
        @click="stopFn"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { availableLangues } from '@/hooks/languages'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {},
  setup (props) {
    const options = ref(availableLangues)

    return {
      options,
      model: ref('en-US'),
      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = availableLangues
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = availableLangues.filter(v => {
            return (
              v.label.toLowerCase().indexOf(needle) > -1 ||
              v.value.toLowerCase().indexOf(needle) > -1
            )
          })
        })
      }
    }
  },
  data () {
    return {
      played: false
    }
  },
  methods: {
    startFn () {
      this.played = true
    },
    stopFn () {
      this.played = false
    }
  }
}
</script>
<style lang="scss" scoped>
.option-card {
  width: 300px;
}
</style>
