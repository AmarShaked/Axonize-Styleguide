Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as stand-alone action triggers.

```js
<ButtonGroup>
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="subtle">Subtle</Button>
  <Button type="link">Link</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button>
  <Button type="primary" icon="fas fa-chess-rook">
    Primary
  </Button>
  <Button type="default" icon="fas fa-motorcycle" />
  <Button type="default" rounded icon="fas fa-motorcycle" />
</ButtonGroup>
```

```js
<ButtonGroup>
  <Button selected>Selected</Button>
</ButtonGroup>
```

Loading buttons

```js
<ButtonGroup>
  <Button loading>Danger</Button>
  <Button type="danger" loading>
    Danger
  </Button>
  <Button type="primary" loading>
    Danger
  </Button>
  <Button type="primary" loading rounded />
</ButtonGroup>
```

Disabled buttons

```js
<ButtonGroup>
  <Button disabled>Default</Button>
  <Button disabled type="subtle">
    Subtle
  </Button>
  <Button disabled type="link">
    Link
  </Button>
</ButtonGroup>
```
