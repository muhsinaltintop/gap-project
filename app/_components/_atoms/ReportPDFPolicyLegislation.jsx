import React from 'react';
import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

// Register Greek font
Font.register({
  family: 'GFS Neohellenic',
  fonts: [
    { src: '/fonts/GFSNeohellenic-Regular.ttf', fontWeight: 400 },
  ],
});

// Register Arabic font
Font.register({
  family: 'Amiri',
  fonts: [
    { src: '/fonts/Amiri-Regular.ttf', fontWeight: 400 },
  ],
});

const styles = StyleSheet.create({
  greek: {
    fontFamily: 'GFS Neohellenic',
  },
  arabic: {
    fontFamily: 'Amiri',
    direction: 'rtl', // Right-to-left text direction
    textAlign: 'right', // Right-aligned text
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
    textAlign: 'center', // Center align header text
  },
  tableHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '12px',
    marginVertical: '3px',
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

// Helper function to check if text is Arabic
const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

const ReportPDFPolicyLegislation = ({ policies, headers, selectedCountries }) => {

  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  };

  const capitaliseFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const formattedCountries = selectedCountries.map(capitaliseFirstLetter);

  return (
    <Document>
      <Page style={styles.page} orientation="landscape">
        <View style={styles.table}>
          <Text style={styles.tableHeader}>
            {`Return Related Legislation and Policy Mapping (${formattedCountries.join(', ')})`}
          </Text>
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
                <Text style={policy.country === "Greece" ? [styles.cellText, styles.greek] : isArabic(policy.originalPolicyName) ? styles.arabic : styles.cellText}>
                  {policy.originalPolicyName}
                </Text>
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
        <Text style={styles.footer}>
          Document downloaded on {getCurrentDate()} from https://www.returnmigration.eu/
        </Text>
      </Page>
    </Document>
  );
};

export default ReportPDFPolicyLegislation;
