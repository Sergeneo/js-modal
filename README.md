# js-modal

![2023-08-10_205833](https://github.com/Sergeneo/js-modal/assets/72825176/07e9bb5e-ffe2-45aa-90bd-34996dd16d61)


Call modal window:

```
modal({message: 'Text'});
```

Call modal window (Success):

```
modal({message: 'Text', title: 'Success', type: 'success'});
```

Call modal window (Error):

```
modal({message: 'Text', title: 'Error', type: 'error'});
```

Call modal window with update (Success):

```
let current = modal({message: 'Send...'});
setTimeout(function() {
    modal({message: 'Text', title: 'Success', type: 'success', current: current});
}, 2000);
```
