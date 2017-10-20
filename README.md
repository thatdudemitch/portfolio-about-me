# Portfolio
*Portfolio can be viewed [here](https://thatdudemitch.github.io/portfolio-about-me/)*
![Image](https://github.com/thatdudemitch/portfolio-about-me/blob/master/images/about-me-screenshot.png)

## Technologies Used

* HTML5
* CSS3
* Vue.js


## Keyframes Used For H1


```html
<!-- Have tabs change on click -->
<ul class="tabs">
  <li :class="{ active: isActive('skills') }" @click="setActive('skills')">Skills</li>
  <li :class="{ active: isActive('web') }" @click="setActive('web')">Web Apps</li>
  <li :class="{ active: isActive('graphic') }" @click="setActive('graphic')">Graphic Design</li>
</ul>

<div class="skills" v-if="this.activeItem === 'skills'" key="skills">
    <!-- content -->
</div>
<div class="web" v-else-if="this.activeItem === 'web'" key="web">
    <!-- content -->
</div>
<div class="graphic" v-else key="graphic">
    <!-- content -->
</div>
```

## Future Improvements

* None at the moment

### Created By
`Mitchel Severe`



