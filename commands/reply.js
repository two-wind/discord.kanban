const { ContextMenuCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName('reply')
    .setType(3),
  async execute(interaction) {
    await interaction.reply('Reply')
  }
}
