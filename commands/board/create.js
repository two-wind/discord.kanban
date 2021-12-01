exports.create = async (interaction) => {

  await interaction.reply('Creating Board...')

  const guild = interaction.guild
  const guildChannelManager = guild.channels

  const kanban = await guildChannelManager.create(interaction.options.getString('name') ?? 'kanban', {
    type: 'GUILD_CATEGORY'
  })

  const columns = ['Backlog', 'In Progress', 'Done']

  columns.forEach(async column => {
    const channel = await guildChannelManager.create(column, {
      type: 'GUILD_TEXT',
    })

    channel.setParent(kanban)
    channel.setTopic(JSON.stringify({
      type: column,
      board: kanban.name,
    }))
  })

  await interaction.editReply('Created board')

}

