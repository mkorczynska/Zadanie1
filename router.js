const wszystko = { template: `<div class="results"><ul>
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>

	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
	
	<li>
		<h3>Lorem ipsum dolor sit amet</h3>
		<h4>consectetur adipiscing elit</h4>
		<p> Sed vehicula eget lectus eu semper. Phasellus porta vel arcu consectetur aliquet.</p>
	</li>
</div>` }

const grafika = { template: `<div class="results"><ul>
	<li>
		<h3>Grafika</h3>
	</li></div>` }

const mapy = { template: `<div class="results"><ul>
	<li>
		<h3>Mapy</h3>
	</li></div>` }
const filmy = { template: `<div class="results"><ul>
	<li>
		<h3>Filmy</h3>
	</li></div>` }

const wiadomosci = { template: `<div class="results"><ul>
	<li>
		<h3>Wiadomoœci</h3>
	</li></div>` }

const wiecej = { template: `<div class="results"><ul>
	<li>
		<h3>Wiêcej</h3>
	</li></div>` }

const ustawienia = { template: `<div class="results"><ul>
	<li>
		<h3>Ustawienia</h3>
	</li></div>` }

const narzedzia = { template: `<div class="results"><ul>
	<li>
		<h3>Narzêdzia</h3>
	</li></div>` }


const routes = [
  { path: '/wszystko', component: wszystko },
  { path: '/grafika', component: grafika },
  { path: '/mapy', component: mapy },
  { path: '/filmy', component: filmy },
  { path: '/wiadomosci', component: wiadomosci },
  { path: '/wiecej', component: wiecej },
  { path: '/ustawienia', component: ustawienia },
  { path: '/narzedzia', component: narzedzia }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
