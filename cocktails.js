<<<<<<< HEAD
 const classic = [
    { name: 'Black Russian', category: 'classic', base: 'vodka', volume: 'short', taste: 'sweet', time: 'digestif'},
    { name: 'Bloody Mary', category: 'classic', base: 'vodka', volume: 'long', taste: 'spicy', time: 'anytime'},
    { name: 'Cosmopolitan', category: 'classic', base: 'vodka', volume: 'short', taste: 'sour', time: 'anytime'},
    { name: 'Cuba libre', category: 'classic', base: 'rum', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'French 75', category: 'classic', base: 'gin', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'Hemingway Special', category: 'classic', base: 'rum', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'Horses Neck', category: 'classic', base: 'cognac', volume: 'long', taste: 'spicy', time: 'anytime'},
    { name: 'Irish coffee', category: 'classic', base: 'whiskey', volume: 'short', taste: 'sweet', time: 'anytime'},
    { name: 'Long Island iced tea', base: 'vodka', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Mai Tai', category: 'classic', base: 'rum', volume: 'long', taste: 'sour', time: 'anytime'},
    { name: 'Margarita', category: 'classic', base: 'tequila', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'Mint julep', category: 'classic', base: 'whiskey', volume: 'short', taste: 'sweet', time: 'anytime'},
    { name: 'Mojito', category: 'classic', base: 'rum', volume: 'long', taste: 'sour', time: 'anytime'},
    { name: 'Moscow mule', category: 'classic', base: 'vodka', volume: 'short', taste: 'sour', time: 'anytime'},
    { name: 'Pina Colada', category: 'classic', base: 'rum', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'See Breeze', category: 'classic', base: 'vodka', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Sex on the Beach', category: 'classic', base: 'vodka', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Singapore Sling', category: 'classic', base: 'gin', volume: 'long', taste: 'spicy', time: 'anytime'},
    { name: 'Tequila Sunrise', category: 'classic', base: 'tequila', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Vesper', category: 'classic', base: 'gin', volume: 'short', taste: 'bitter', time: 'anytime'},
    { name: 'Zombie', category: 'classic', base: 'rum', volume: 'long', taste: 'sour', time: 'anytime'}
];

 const unforgattables = [
    { name: 'Aviation', category: 'unfog', base: 'gin', volume: 'long', taste: 'sour', time: 'anytime'},
    { name: 'Alexander', category: 'unfog', base: 'cognac', volume: 'long', taste: 'sweet', time: 'digestif'},
    { name: 'White Lady', category: 'unfog', base: 'gin', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'Brandy Alexander', category: 'unfog', base: 'cognac', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Boulevardier', category: 'unfog', base: 'whiskey', volume: 'long', taste: 'bitter', time: 'aperitif'},
    { name: 'Whiskey sour', category: 'unfog', base: 'whiskey', volume: 'long', taste: 'sour', time: 'aperitif'},
    { name: 'Monkey Gland', category: 'unfog', base: 'gin', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Dayquiri', category: 'unfog', base: 'rum', volume: 'long', taste: 'citrus', time: 'aperitif'},
    { name: 'Ginn Fizz', category: 'unfog', base: 'gin', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'John Collinz', category: 'unfog', base: 'gin', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Casino', category: 'unfog', base: 'gin', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Clover Club', category: 'unfog', base: 'gin', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Angel Face', category: 'unfog', base: 'gin', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Manhattan', category: 'unfog', base: 'whiskey', volume: 'long', taste: 'sweet', time: 'aperitif'},
    { name: 'Dry Martini', category: 'unfog', base: 'gin', volume: 'long', taste: 'bitter', time: 'anytime'},
    { name: 'Between the Sheets', category: 'unfog', base: 'rum', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Mary Pickford', category: 'unfog', base: 'rum', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Negroni', category: 'unfog', base: 'gin', volume: 'long', taste: 'bitter', time: 'aperitif'},
    { name: 'Old Fashioned', category: 'unfog', base: 'whiskey', volume: 'long', taste: 'citrus', time: 'aperitif'},
    { name: 'Paradise', category: 'unfog', base: 'gin', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Planters Punch', category: 'unfog', base: 'rum', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Ramos gin fizz', category: 'unfog', base: 'gin', volume: 'long', taste: 'sour', time: 'anytime'},
    { name: 'Rusty Nail', category: 'unfog', base: 'whiskey', volume: 'long', taste: 'sweet', time: 'digestif'},
    { name: 'Sazerac', category: 'unfog', base: 'cognac', volume: 'long', taste: 'sweet', time: 'digestif'},
    { name: 'Sidecar', category: 'unfog', base: 'cognac', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Stinger', category: 'unfog', base: 'cognac', volume: 'long', taste: 'sweet', time: 'digestif'}
];

 const newEra = [
    { name: 'Barracuda', category: 'newEra', base: 'rum', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'Bees Knees', category: 'newEra', base: 'gin', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'Bramble', category: 'newEra', base: 'gin', volume: 'short', taste: 'sour', time: 'anytime'},
    { name: 'Fernandito', category: 'newEra', base: 'gin', volume: 'long', taste: 'sweet', time: 'anytime'},
    { name: 'French martini', category: 'newEra', base: 'vodka', volume: 'short', taste: 'sweet', time: 'anytime'},
    { name: 'Illegal', category: 'newEra', base: 'rum', volume: 'short', taste: 'sour', time: 'anytime'},
    { name: 'Lemon drop martini', category: 'newEra', base: 'vodka', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'New York Sour', category: 'newEra', base: 'whiskey', volume: 'short', taste: 'sour', time: 'anytime'},
    { name: 'Old Cuban', category: 'newEra', base: 'rum', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'Paloma', category: 'newEra', base: 'tequila', volume: 'long', taste: 'citrus', time: 'anytime'},
    { name: 'Paper Plane', category: 'newEra', base: 'whiskey', volume: 'short', taste: 'sour', time: 'aperitif'},
    { name: 'Penicillin', category: 'newEra', base: 'whiskey', volume: 'short', taste: 'bitter', time: 'anytime'},
    { name: 'Russian Spring Punch', category: 'newEra', base: 'vodka', volume: 'long', taste: 'sour', time: 'anytime'},
    { name: 'Southside', category: 'newEra', base: 'gin', volume: 'short', taste: 'sour', time: 'anytime'},
    { name: 'Spicy Fifty', category: 'newEra', base: 'vodka', volume: 'short', taste: 'spicy', time: 'anytime'},
    { name: 'Suffering Bastard', category: 'newEra', base: 'cognac', volume: 'long', taste: 'bitter', time: 'anytime'},
    { name: 'Tipperary', category: 'newEra', base: 'whiskey', volume: 'short', taste: 'bitter', time: 'anytime'},
    { name: 'Tommys margarita', category: 'newEra', base: 'tequila', volume: 'short', taste: 'citrus', time: 'anytime'},
    { name: 'Trinidad sour', category: 'newEra', base: 'whiskey', volume: 'short', taste: 'bitter', time: 'anytime'},
    { name: 'Yellow Bird', category: 'newEra', base: 'rum', volume: 'short', taste: 'sour', time: 'anytime'}
];
=======
 const unforgattables = [
    { name: 'Bellini', category: 'unfog', base: 'prosecco', volume: '', taste: 'sour', time: '', glass: ''},
    { name: 'Black Russian', category: 'unfog', base: 'vodka', volume: 'short', taste: 'sweet', time: 'digestif', glass: ''},
    { name: 'Bloody Mary', category: 'unfog', base: 'vodka', volume: 'long', taste: '', time: 'anytime', glass: '' },
    { name: 'Caipirinha', category: 'unfog', base: '', volume: 'short', taste: '', time: 'anytime', glass: '' },
    { name: 'Cosmopolitan', category: 'unfog', base: 'vodka', volume: 'short', taste: '', time: 'anytime', glass: 'rocs' },
    { name: 'Cuba libre', category: 'unfog', base: 'rum', volume: 'long', taste: '', time: 'anytime', glass: 'highball' },
    { name: 'French 75', category: 'unfog', base: 'gin', volume: '', taste: '', time: '', glass: 'coctail'},
    { name: 'French Connection', category: 'unfog', base: 'cognac', volume: 'short', taste: '', time: 'digestif', glass: 'highball'},
    { name: 'Golden dream', category: 'unfog', base: '', volume: 'short', taste: 'citrus', time: 'digestif', glass: 'rocks' },
    { name: 'Grasshopper', category: 'unfog', base: '', volume: '', taste: '', time: '', glass: '' },
    { name: 'Hemingway Special', category: 'unfog', base: 'rum', volume: 'short', taste: '', time: 'anytime', glass: '' },
    { name: 'Horses Neck', category: 'unfog', base: 'cognac', volume: 'long', taste: '', time: 'anytime', glass: 'coctail'},
    { name: 'Irish coffee', category: 'unfog', base: '', volume: '', taste: '', time: '', glass: ''},
    { name: 'Kir', category: 'unfog', base: 'wine', volume: '', taste: '', time: 'digestif', glass: '' },
    { name: 'Long Island iced tea', base: '', volume: '', taste: '', time: '', glass: '' },
    { name: 'Mai Tai', category: 'unfog', base: 'rum', volume: 'long', taste: '', time: 'anytime', glass: '' },
    { name: 'Margarita', category: 'unfog', base: 'tequila', volume: 'short', taste: '', time: 'anytime', glass: ''},
    { name: 'Mimosa', category: 'unfog', base: 'prosecco', volume: '', taste: '', time: '', glass: ''},
    { name: 'Mint julep', category: 'unfog', base: 'whiskey', volume: 'short', taste: '', time: 'anytime', glass: '' },
    { name: 'Mojito', category: 'unfog', base: 'rum', volume: 'long', taste: '', time: '', glass: '' },
    { name: 'Moscow mule', category: 'unfog', base: 'vodka', volume: 'short', taste: '', time: 'anytime', glass: '' },
    { name: 'Pina Colada', category: 'unfog', base: 'rum', volume: 'long', taste: '', time: '', glass: '' },
    { name: 'Pisco Sour', category: 'unfog', base: '', volume: '', taste: '', time: 'anytime', glass: '' },
    { name: 'See Breeze', category: 'unfog', base: 'vodka', volume: 'long', taste: '', time: '', glass: '' },
    { name: 'Sex on the Beach', category: 'unfog', base: 'vodka', volume: 'long', taste: '', time: '', glass: ''},
    { name: 'Singapore Sling', category: 'unfog', base: 'gin', volume: 'long', taste: '', time: '', glass: ''},
    { name: 'Tequila Sunrise', category: 'unfog', base: 'tequila', volume: 'long', taste: '', time: '', glass: '' },
    { name: 'Vesper', category: 'unfog', base: '', volume: '', taste: '', time: '', glass: '' },
    { name: 'Zombie', category: 'unfog', base: 'rum', volume: 'long', taste: '', time: '', glass: '' }
];

 const classics = [
    { name: 'Aviation', category: 'classic', base: 'gin', volume: 'long', taste: 'citrus', time: 'digestif'},
    { name: 'Alexander', category: 'classic', base: 'cognac', volume: 'long', taste: 'sweet' },
    { name: 'Americano', category: 'classic', base: 'vermouth', volume: 'long', taste: 'citrus' },
    { name: 'Bacardi', category: 'classic', base: 'rum', volume: 'long', taste: 'citrus' },
    { name: 'White Lady', category: 'classic', base: 'gin', volume: 'short', taste: 'citrus' },
    { name: 'Whiskey sour', category: 'classic', base: 'whiskey', volume: 'long', taste: 'sour' }
];

 const newEra = [
    { name: 'Barracuda', category: 'newEra', base: 'gin', taste: 'citrus' },
    { name: 'Bees Knees', category: 'newEra', base: 'gin', taste: 'sweet' },
    { name: 'Bramble', category: 'newEra', base: 'gin', taste: 'sour' },
    { name: 'Canchanchara', category: 'newEra', base: 'gin', taste: 'citrus' },
    { name: 'Fernandito', category: 'newEra', base: 'gin', taste: 'sweet' },
    { name: 'French martini', category: 'newEra', base: 'gin', taste: 'sour' }
];
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a
