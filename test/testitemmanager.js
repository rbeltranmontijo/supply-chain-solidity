const itemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {
    it("... should be able to add an Item", async function () {
        // console.log(itemManager)
        const itemManagerInstance = await itemManager.deployed();
        // console.log('------------------------------')
        // console.log(itemManagerInstance)
        const itemName = "test1";
        const itemPrice = 500;
        const result = await itemManagerInstance.createItem(itemName, itemPrice, { from: accounts[0] });
        // console.log(result)
        assert.equal(result.logs[0].args._itemIndex, 0, "Its not the first item");

        const item = await itemManagerInstance.items(0);
        console.log(item)
        assert.equal(item._identifier, itemName, "The identifier was different");
    })
})