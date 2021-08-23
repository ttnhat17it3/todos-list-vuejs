<template>
  <div class="tab">
      <div class="item-left">
        {{ itemLeft }} item left
      </div>
      <div class="tab-item">
        <button 
          class="tablinks" 
          @click="changeStatus(event, 'all')" 
          :class="[status === 'all' ? 'active' : '' ]">
            ALL
        </button>
        <button 
          class="tablinks" 
          @click="changeStatus(event, 'active')" 
          :class="[status === 'active' ? 'active' : '' ]">
            ACTIVE
        </button>
        <button 
          class="tablinks" 
          @click="changeStatus(event, 'complete')" 
          :class="[status === 'complete' ? 'active' : '' ]">
            COMPLETE
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: "TabBar",
  props: ["itemLeft", "status"],
  setup(props, context) {
    const changeStatus = (event, status) => {
      context.emit("change-status", status);
    }

    return {
      changeStatus,
    }
  }
}
</script>

<style>
.tab {
  display: flex;
  justify-content: space-between;

  background: #fff;
  padding: 10px;
  margin: 0;
  border-bottom: 1px dotted #ccc;
}
.tab button {
  background-color: inherit;
  border: none;
  outline: none;
  color: rgb(198,228,214);
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s ease;
}
.tab button:hover {
  background-color: rgb(77,186,135);
}
.tab button.active {
  background-color: rgb(77,186,135);
}

.item-left {
  color: rgb(77,186,135);
}
</style>