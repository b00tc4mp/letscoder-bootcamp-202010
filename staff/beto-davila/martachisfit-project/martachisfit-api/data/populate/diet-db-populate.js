require('dotenv').config()

const { models: { Diet }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Diet.insertMany([
            {
                type: "keto", calories: 1500,
                meals: {
                    meal1: "Tortilla (2 huevos) + queso curado (25gr), espinacas y aceitunas negras (30gr)",
                    meal2: "Ensalada grande variada con 1/2 aguacate, nueces (40gr) y pollo a la plancha (100gr)",
                    meal3: "'Pasta' de calabacín con carne picada de tenera/cerdo (100gr)"
                },
                macros: {
                    carbs: "10%",
                    fats: "75%",
                    protein: "15%"
                },
            },

            {
                type: "keto", calories: 2000,
                meals: {
                    meal1: "Yogur griego (150gr) + almendras (50gr) + arándanos (50gr)",
                    meal2: "125g cabecero de lomo (embutido) + 200gr de espinacas al vapor",
                    meal3: "Tortilla de 3 huevos (talla L), setas a la plancha (100gr.) y una lata de sardinillas"
                },
                macros: {
                    carbs: "10%",
                    fats: "70%",
                    protein: "20%"
                },
            },

            {
                type: "keto", calories: 2500,
                meals: {
                    meal1: "Tortilla (3 huevos) talla L + queso curado (35gr), espinacas al vapor (200gr) y aceitunas negras (50gr)",
                    meal2: "Salmón (150gr), brócoli al vapor (200gr), tomate (50gr) y 15ml de aceite de oliva",
                    meal3: "Lomos de cerdo fritos (150gr), 200gr de espinacas al vapor y 20ml aceite de oliva"
                },
                macros: {
                    carbs: "5%",
                    fats: "70%",
                    protein: "25%"
                },
            },

            {
                type: "mediterranean", calories: 1500,
                meals: {
                    meal1: "Leche desnatada (200ml) + Cereales sin azúcar (tipo copo de maíz) (30g)+ Fruta (150g)",
                    meal2: "Pan (60g) + Jamón york o pavo (2 lonchas =30g) o atún al natural (60g)",
                    meal3: "Lentejas con verduras (Lentejas (60g en crudo ó 180 g en cocinado), Cebolla (30g), zanahoria (20g)). Pollo a la plancha (120g). Aceite de oliva (10g). Fruta (150g).",
                    meal4: "Revuelto de espárragos trigueros (Espárragos (60g) + (1 huevo (60g) + 1 clara). Aceite de oliva (10g). Fruta (150g)"
                },
                macros: {
                    carbs: "40%",
                    fats: "35%",
                    protein: "25%"
                },
            },

            {
                type: "mediterranean", calories: 2000,
                meals: {
                    meal1: "Leche semidesnatada (250ml)+ Tostada de pan de barra (50g)+ Aceite de oliva virgen (5g)+ Tomate natural (30g) + Fruta (100g)",
                    meal2: "Fruta (120g) + Yogur natural (125g)",
                    meal3: "Garbanzos con bacalao (Garbanzos (80g)+ Bacalao (60g)+ Espinacas (120g) + Zanahoria (50g)). Ensalada variada, Aceite de oliva (10g). Fruta cítrica (200g).",
                    meal4: "Alcachofas rehogadas con jamón (Alcachofas (150g) + Jamón (20g) + Ajo (5g)). Merluza al horno (110g) con patata panadera (100g). Aceite de oliva (10g). Fruta (120g)"
                },
                macros: {
                    carbs: "35%",
                    fats: "30%",
                    protein: "35%"
                },
            },

            {
                type: "mediterranean", calories: 2500,
                meals: {
                    meal1: "2 yogures natural (250g)+ Copos de avena (50g)+ Fruta (150g)+ Frutos secos al natural (15g)",
                    meal2: "Pan de barra (60g)+ Jamón york o pavo (50g).",
                    meal3: "Arroz con verduras (Arroz (60g)+ Pimiento (60g)+ Cebolla (30g) + Calabacín (80g)). Lomo de cerdo a la plancha (120g) con patata al horno (150g). Aceite de oliva (15g). Fruta (150g)",
                    meal4: "Tortilla francesa con atún ((1 huevo = 60g) + Atún claro (50g)). Ensalada de tomate natural + aceitunas (30g). Aceite de oliva (15g). Fruta (200g)"
                },
                macros: {
                    carbs: "40%",
                    fats: "25%",
                    protein: "35%"
                },
            },

            {
                type: "vegan", calories: 1500,
                meals: {
                    meal1: "200 ml de bebida vegetal, 30gr de cereles de maíz y una pieza de fruta mediana",
                    meal2: "Your de soja (125gr) y pieza de fruta mediana",
                    meal3: "Ensalada de pasta (75gr), 1 tomate, 1 cuchara de aceite de oliva y vinagre. Pieza de fruta mediana ",
                    meal4: "Tostada de pan (80g), Tomate natural (80g), pepino, aguacate (50g) y una cucharada aceite de oliva. Postre: Yogur de soja (125g)."
                },
                macros: {
                    carbs: "55%",
                    fats: "20%",
                    protein: "25%"
                },
            },

            {
                type: "vegan", calories: 2000,
                meals: {
                    meal1: "Leche vegetal (250ml) con café y tostadas de pan integral (60g) con aguacate (50g) y tomate (50g), pieza de fruta (150g)",
                    meal2: "Yogur entero natural (125g) con frutos secos (almendras/nueces) (50g).",
                    meal3: "Ensalada de garbanzos (120g): pepino (40g), cebolla (30g), tomate (50g), zanahoria (30g), aceite de oliva (10ml) y vinagre (5ml).",
                    meal4: "Brochetas de tofu (150g) y verduras con guarnición de patatas al horno (200g): calabacín (50g), tomates cherry (30g), pimiento rojo (40g), vinagre de módena (5ml). "
                },

                macros: {
                    carbs: "45%",
                    fats: "25%",
                    protein: "30%"
                },
            },

            {
                type: "vegan", calories: 2500,
                meals: {
                    meal1: "Leche vegetal (300ml), copos de avena (75gr), 1 pieza de fruta grande (+200gr)",
                    meal2: "1 plátano grande + 50gr de alguna crema de frutos secos (cacahuete, almendra...).",
                    meal3: "Ensalada verde variada con 1 manzana troceada, 30gr de nueces y 120gr de lentejas rojas o pasta de lentejas",
                    meal4: "80g de arroz basmati (en seco) con brócoli, cebolla, pimiento, curry..., 200g de tofu sazonado con especias al gusto"
                },

                macros: {
                    carbs: "45%",
                    fats: "25%",
                    protein: "30%"
                },
            }

        ])
            .then(() => console.log('Diets inserted'))
            .catch(error => console.error('There was an error: ', error))
    })