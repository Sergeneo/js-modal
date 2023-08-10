# js-modal

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
