<template>
  <q-btn color="primary" icon="check" label="OK" @click="onClick" />
</template>

<script>
export default {
  setup (props) {
    console.log(props)

    const onClick = () => {
      alert('xxx')
    }

    return {
      onClick
    }
  }
}
</script>
