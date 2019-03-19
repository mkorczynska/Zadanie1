Vue.component('v-autocompleter', {
	template: `
		<div id="ac">
			<div id="completer">
				<input
					type="text"
					id="search_form"
					v-model="inputContent"
					@input="change"
					@keydown.down="down"
					@keydown.up="up"
					@keydown.enter="enter"
				/>
			</div>
			<div v-show="isOpen" class="autocomplete-results">
				<ul>
					<li
						v-for="(result, i) in results"
						:key="i"
						@click="setResult(result)"
						class="autocomplete-result"
						:class="{ 'is-active': i === counter }"
					>
					{{ result }}
					</li>
				</ul>
			</div>
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
    counter: 0,
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
		}).slice(0, 5);
    },
    setResult(result) {
		this.inputContent = result;
		this.isOpen = true;
    },
    down(evt) {
		if (this.counter < this.results.length) {
			this.counter = this.counter + 1;
		}
    },
    up(evt) {
		if (this.counter > 0) {
			this.counter = this.counter - 1;
		}
    },
    enter(evt) {
		this.inputContent = this.results[this.counter];
		this.isOpen = false;
		this.counter = -1;
    },
    handleClickOutside(evt) {
		if (!this.$el.contains(evt.target)) {
			this.isOpen = false;
			this.counter = -1;
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

const vueApp=new Vue({
  el: "#vueApp",
  data:{
  	  items:animals
  }
})


