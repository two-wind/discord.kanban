
const { SlashCommandBuilder } = require('@discordjs/builders')
const { create } = require('./column/create')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('column')
    .addSubcommand(subcommand =>
      subcommand
        .setName('create')
        .setDescription('Create a custom column')
        .addStringOption(option =>
          option
            .setName('name')
            .setDescription('Name of column')
        )
    )
    .setDescription('Commands for columns board'),
  async execute(interaction) {

    switch (interaction.options.getSubcommand()) {

      case 'create':
        await create(interaction)
        break
      default:
        return
    }
  }
}
