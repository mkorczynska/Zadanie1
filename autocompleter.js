Vue.component('v-autocompleter', {
  template: `
     <div class="autocomplete">
    <input
      type="text"
	  class="search_form"
	  id="search_form"
	  v-model="inputContent"
      @input="change"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.enter="enter"
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
  `,
  props: {
    items: {
      type: Array,
      required: false
    }
  },

  data() {
    return {
      isOpen: false,
      results: [],
      inputContent: "",
      arrowCounter: 0,
    };
  },

  methods: {
    change() {
      this.$emit("input", this.inputContent);
	  this.filterResults();
      this.isOpen = true;
	  
    },

    filterResults() {
      this.results = this.items.filter(item => {
        return item.toLowerCase().indexOf(this.inputContent.toLowerCase()) ===0;
      });
    },
    setResult(result) {
      this.inputContent = result;
      this.isOpen = true;
    },
    down(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    up() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    enter() {
      this.inputContent = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  watch: {
    items: function(val, oldValue) {
      if (val.length !== oldValue.length) {
        this.results = val;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
})

const app99=new Vue({
  el: "#app99",
  data:{
  	  items:animals
  }
})


