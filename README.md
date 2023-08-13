# js-modal

![2023-08-10_205833](https://github.com/Sergeneo/js-modal/assets/72825176/07e9bb5e-ffe2-45aa-90bd-34996dd16d61)


Call modal window:

```
modal('Text');
```

Call modal window (Success):

```
modal('Text', 'Success', 'success');
```

Call modal window (Error):

```
modal('Text', 'Error', 'error');
```

Call modal window with update (Success):

```
let current = modal('Send...');
setTimeout(function() {
    modal('Text', 'Success', 'success', current);
}, 2000);
```
