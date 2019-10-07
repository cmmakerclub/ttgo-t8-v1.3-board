module.exports = {
    blocks: [
        {
            name: "SD Card",
            index: 10,
            color: "65",
            icon: "/static/icons/icons8_stack_96px.png",
            blocks: [
                "sdcard_begin",
                {
                    xml:
                        `<block type="sdcard_write_txt">
                      <value name="DATA">
                          <shadow type="basic_string">
                              <field name="VALUE">Hello KB-IDE</field>
                          </shadow>
                      </value>
                  </block>`
                },
                {
                    xml:
                        `<block type="sdcard_write_csv">
                      <value name="DATA1">
                          <shadow type="basic_string">
                              <field name="VALUE"></field>
                          </shadow>
                      </value>
                      <value name="DATA2">
                          <shadow type="basic_string">
                              <field name="VALUE"></field>
                          </shadow>
                      </value>
                      <value name="DATA3">
                          <shadow type="basic_string">
                              <field name="VALUE"></field>
                          </shadow>
                      </value>
                      <value name="DATA4">
                          <shadow type="basic_string">
                              <field name="VALUE"></field>
                          </shadow>
                      </value>
                  </block>`
                }
            ]
        },
        {
            override: true,
            name: 'Time',
            index: 20,
            color: '230',
            icon: '/static/icons/icons8_Story_Time_96px.png',
            blocks: [
                {
                    xml:
                        `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml:
                        `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'time_millis',
                'time_micros'
            ]
        },
    ],
};
