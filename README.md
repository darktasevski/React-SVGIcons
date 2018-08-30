# SVGIcon

SVGs as React Components

## Demo

TBD

## Getting Started

Icons are transformed from SVG to React components with [svgr](https://github.com/smooth-code/svgr) tool, and customized a bit after transformation so that they have more options which can be used to modify SVG.

### Prerequisites

-   [node and npm](https://www.npmjs.com/get-npm).
-   [svgr](https://github.com/smooth-code/svgr)

### Creating new icon

Install [svgr](https://github.com/smooth-code/svgr) tool:

```
yarn global add svgr
```

or

```
npm install -g svgr
```

After installation go directory with svg icons and run svgr via command line on one icon:

```
# Usage: svgr [options] <file>
$ svgr --no-semi --icon icon.svg
```

or transform a whole directory of SVG files (matching .svg or .SVG) into React components.

```
# Usage: svgr [-d out-dir] [src-dir]
$ svgr -d icons icons
```

SVGs wil be transformed to React Components optimized for icon usage(removed titles and optimized via SVGO).
React code will be styled with Prettify, which can be customized as well.

After svgr have finished transforming icons, there are some changes that you will need to made in SVG React components:

So from this:

```
const Superpowers = props => (
  <svg width={1792} height={1792} viewBox="0 0 1792 1792" {...props}>
    <path d="..." />
  </svg>
);
```

to this:

```
export const Superpowers = props => {
    const { width, height, styles, size, ...rest } = props;

    return (
        <svg
            width={size || width}
            height={size || height}
            className={styles}
            viewBox="0 0 1792 1792"
        >
            <path fill={props.fill || 'currentColor'} {...rest} d="..." />
        </svg>
    );
};
```

so that additional functionality for icons can be achieved. This changes are sharing props among the elements of the SVG, and setting up default values for fill of the SVG if it already had fill color in it.

> This can be cumbersome if there is lot of icons to be transformed. Working on template that will hopefully do this on its own.

## Using icons

Main component is <SVGIcon> component:

```
const SVGIcon = props => {
    if (!icons[props.icon]) {
        return 'There is no icon with that name';
    }

    const { icon, handleClick, ...rest } = props;
    const Icon = icons[icon];

    return (
        <div onClick={handleClick} style={wrapper}>
            <Icon {...rest} />
        </div>
    );
};
```

`div.wrapper` is there to wrap SVG and give it overlay, so that SVG can be clicked. Otherwise click will sometimes be registered on SVG element and sometimes on SVG path element, which can lead to problems. Can be fixed maybe with passing onClick callback to path element as well as SVG.

## Props

`styles`: String. CSS class or classes that will be assigned to svg element.

`wrapperClassName`: String. Classname or classnames to be added to default SVGIcon styles.

`icon`: Required. String. Name of the icon, usually loaded from the library imported into SVGIcon file.

`width`: Number. Width dimension of the icon, if not provided icon's width will be 1em. Values can be passed as px, em, rem.

`height`: Number. Height dimension of the icon, if not provided icon's height will be 1em. Values can be passed as px, em, rem.

`size`: Number. If height and width are the same size, then, instead of passing both width and height as props, you can pass just size.

`fill`: String. Defines the color of the given icon. Can be passed as hex, rgb or colorname value.

`fillOpacity`: String. Specifies the opacity of the color or the content the current object is filled with. Its default value is 1.

`strokeWidth`: String. Specifies the width of the outline on the current icon. Its default value is 1.

`strokeOpacity`: String. Specifies the opacity of the outline on the current icon. Its default value is 1.

`strokeLinejoin`: String. Specifies the shape to be used at the corners of paths or basic shapes when they are stroked. Possible values: miter | round | bevel | inherit. Its using round by default.

Example of component that will be rendered:

```
<SVGIcon icon="Search" height='55px' height='55px' fill="red" stroke="#ccc" />
```

## Built With

-   [React](reactjs.org) - The web view framework used
-   [svgr](https://github.com/smooth-code/svgr) - Tool for transforming SVGs

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

-   **Darko Tasevski** - _Initial work_ - [Puritanic](https://github.com/Puritanic)

## Contributors

-   **Jovan Milovanovic** - [user928](https://github.com/user928)
-   **Miloš Rašić** - [MilosRasic](https://github.com/MilosRasic)
-   **Bojan Todorović** - [bojant987](https://github.com/bojant987)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

-   Hat tip to anyone whose code was used
