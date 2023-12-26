function generateAndCopy() {
    var namespace = document.getElementById('namespace').value;
    var baseItemId = document.getElementById('baseItemId').value;
    var customItemId = document.getElementById('customItemId').value;
    var customModelData = document.getElementById('customModelData').value;
    var packColor = document.getElementById('packColor').value;
    var translationFallback = document.getElementById('translationFallback').value;

    var data = {
        "pools": [
            {
                "rolls": 1,
                "entries": [
                    {
                        "type": "minecraft:item",
                        "name": "minecraft:" + baseItemId,
                        "functions": [
                            {
                                "function": "minecraft:set_name",
                                "name": {
                                    "translate": "item." + namespace + "." + customItemId,
                                    "italic": false,
                                    "fallback": translationFallback
                                }
                            },
                            {
                                "function": "minecraft:set_lore",
                                "lore": [
                                    [
                                        {
                                            "translate": "lore." + namespace + ".tooltip",
                                            "color": "white",
                                            "font": namespace + ":tooltip",
                                            "italic": false
                                        },
                                        {
                                            "text": " "
                                        },
                                        {
                                            "translate": "pack." + namespace,
                                            "font": "minecraft:default",
                                            "color": packColor
                                        }
                                    ]
                                ]
                            },
                            {
                                "function": "minecraft:set_nbt",
                                "tag": "{" + namespace + ":[{id:\"" + customItemId + "\"},CustomModelData:" + customModelData + "]}"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    var text = JSON.stringify(data, null, 2);
    document.getElementById('viewText').value = text;

    var copyText = document.getElementById('viewText');
    copyText.select();
    document.execCommand('copy');
}

function downloadText() {
    var text = document.getElementById('viewText').value;
    var customItemId = document.getElementById('customItemId').value;

    var blob = new Blob([text], { type: 'application/json' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = customItemId + '.json';
    link.click();
}
