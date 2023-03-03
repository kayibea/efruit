# Efruit

Efruit est une api qui permet de récupérer des informations sur les fruits aléatoirement.

Projet realiser dans le cadre du concours  **Utilisation d'une API REST dans une création web** 

Source: [YouTube](https://youtu.be/9tSYNQJn6c8)


Visiter le site: [Efruit](https://efruit.cyclic.app)

## Utilisation

```javascript
fetch('https://efruit.cyclic.app/api/fruit')
    .then(res => res.json())
    .then(json => console.log(json))

// Specifier le nombre de fruits

fetch('https://efruit.cyclic.app/api/fruit?limit=1')
    .then(res => res.json())
    .then(json => console.log(json))
```

