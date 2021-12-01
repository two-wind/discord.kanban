const { SlashCommandBuilder } = require('@discordjs/builders')
const { create } = require('./board/create')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('board')
    .addSubcommand(subcommand =>
      subcommand
        .setName('create')
        .setDescription('Create a kanban board')
        .addStringOption(option =>
          option
            .setName('name')
            .setDescription('Name of board')
            .setRequired(true)
        )
    )
    .setDescription('Commands for kanban board'),
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
