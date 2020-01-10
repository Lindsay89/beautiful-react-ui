<div align="center">
  <p align="center">
    <img src="./logo.png" alt="Beautiful React Hooks" width="750px" />
  </p>
</div>
<br />
<div>
  <p align="center">
    A collection of lightweight and easy-to-customise controlled React components
  </p>
</div>

## 💡 Why?

In the last few year we've adopted and used a good number of ui-libraries, even though these libraries generally provide 
a strong ally in developing user interfaces, sometimes the struggle to customise their components' style or behaviour 
may be quite an effort, especially when customising few line of CSS costs the introduction of new technologies, languages 
or compilers. <br />
Not to mention the struggle with the hell, or the tendency of some libraries to export stateful components or the 
matter of sizes and spaces completely spoiled between components by the customisations.<br />
How to reduce the customising fatigue then? <br />
Given the over-explored sea of the ui-libraries, was the idea of building another one a solution already?<br />
Probably not, but thinking of a concrete, driven-by-props API for customising the components' behaviour whilst sticking 
to the old good CSS for customising their style was, in my humble opinion, quite close to an answer.<br />
That's why we created `beautiful-ui`, having in mind the intent to provide a lightweight yet easy-to-customise controlled 
components library.

### 🎓 Principles

- **Driven by grace**: instead of customising the padding/margin/color/whatever of a single component, 
customise the value of padding/margin/color/whatever trough a [configuration file](./docs/configuring.md), the library 
will then generate a tailored style keeping grace between components.
- **Render behaviour**: the majority of the exported components accept a `renderer` prop to possibly customise 
their behaviour
- **Controlled components**: components should be [controlled](https://reactjs.org/docs/forms.html#controlled-components), that's it.
- **Lightweights**: import nothing but lightweight javascript components.

## ☕️ Features

* Concise API
* Small and lightweight
* Easy to use
* Easy to customise
* Fully written in old-school JS (although TS types are supported)
* Based on [Tailwindcss](https://tailwindcss.com/)

## Contributing

Contributions are very welcome and wanted. 

To submit your custom pull request, please make sure your read our [CONTRIBUTING](./CONTRIBUTING.md) guidelines.

**Before submitting** a new pull request, please make sure:

1. You have updated the package.json version and reported your changes into the [CHANGELOG](./CHANGELOG.md) file
3. make sure you run `npm test` and `npm build` before submitting your merge request.
4. make sure you've added the documentation of your changes.
5. if you've changed the signature of a component, please make sure you've updated the `index.d.ts` file.

### Credits

This library is provided and sponsored by: 

<div>
  <p>
    <a href="https://beautifulinteractions.com/">
      <img src="https://beautifulinteractions.com/img/logo-colorful.svg" alt="Beautiful interactions" width="140px" />
    </a>
  </p>
</div>

As part of our commitment to support and provide the open source community.

---

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
