import React from 'react';
import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

// Register the font using URL paths (relative to the public directory)
Font.register({
  family: 'GFS Neohellenic',
  fonts: [
    { src: '/fonts/GFSNeohellenic-Regular.ttf', fontWeight: 400 },
  ],
});

const styles = StyleSheet.create({
  greek: {
    fontFamily: 'GFS Neohellenic',
  },
  page: {
    padding: 20,
  },
  table: {
    display: 'table',
    width: '100%',
    margin: '20px 0',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
  },
  tableCell: {
    padding: 5,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'left', // Align text to left
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',// Center align header text
  },
  headerCell: {
    backgroundColor: '#e0e0e0',
    fontSize: '10px',
    padding: 5,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
  cellText: {
    margin: 5,
    fontSize: '9px',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: '#000',
    paddingTop: 10,
  },

  col1: { flex: 3 },
  col2: { flex: 7 },
  col3: { flex: 7 },
  col4: { flex: 4 },
  col5: { flex: 4 },
  col6: { flex: 4 },
  col7: { flex: 6 },
  col8: { flex: 11 },
  col9: { flex: 8 },
});

const ReportPDF = ({ policies, headers }) => {

  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  };

  return (
    <Document>
      <Page style={styles.page} orientation='landscape'>
        <View style={styles.table}>
          
          <View style={styles.tableRow}>
            {headers?.map((header, indexHeader) => (
              <View key={indexHeader} style={[styles.tableCell, styles.headerCell, styles[`col${indexHeader + 1}`]]}>
                <Text style={styles.header}>{header?.label}</Text>
              </View>
            ))}
          </View>

          {/* Data Rows */}
          {policies.map((policy, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCell, styles.col1]}>
                <Text style={styles.cellText}>{policy.country}</Text>
              </View>
              <View style={[styles.tableCell, styles.col2]}>
                <Text style={styles.cellText}>{policy.policyName}</Text>
              </View>
              <View style={[styles.tableCell, styles.col3]}>
                <Text style={policy.country === "Greece" ? [styles.cellText, styles.greek] : styles.cellText}>{policy.originalPolicyName}</Text>
              </View>
              <View style={[styles.tableCell, styles.col4]}>
                <Text style={styles.cellText}>{policy.announcedYear}</Text>
              </View>
              <View style={[styles.tableCell, styles.col5]}>
                <Text style={styles.cellText}>{policy.typeOfLegislation}</Text>
              </View>
              <View style={[styles.tableCell, styles.col6]}>
                <Text style={styles.cellText}>{policy.levelOfLegislation}</Text>
              </View>
              <View style={[styles.tableCell, styles.col7]}>
                <Text style={styles.cellText}>{policy.policyTypeArea}</Text>
              </View>
              <View style={[styles.tableCell, styles.col8]}>
                <Text style={styles.cellText}>{policy.policyDescription}</Text>
              </View>
              <View style={[styles.tableCell, styles.col9]}>
                <Text style={styles.cellText}>{policy.notes}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.footer}>Document downloaded on {getCurrentDate()} from https://www.returnmigration.eu/</Text>
      </Page>
    </Document>
  );
};

export default ReportPDF;
