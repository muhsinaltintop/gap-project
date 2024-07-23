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
    width: 'auto',
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
    flex: 1,
    textAlign: 'left', // Align text to left
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center', // Center align header text
  },
  headerCell: {
    fontSize: '10px',
    padding: 5,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
  cellText: {
    margin: 5,
    fontSize: '9px'
  },
});

const ReportPDF = ({ policies, headers }) => {

  const formatPolicyTypeArea = (policyTypeArea) => {
    let formatted = "";
    if (policyTypeArea.asistedReturn) formatted += "Asisted Return, ";
    if (policyTypeArea.borderManagement) formatted += "Border Management, ";
    if (policyTypeArea.coercedEnforcedReturn) formatted += "Coerced Enforced Return, ";
    if (policyTypeArea.generalAsylum) formatted += "General Asylum, ";
    if (policyTypeArea.irregularity) formatted += "Irregularity, ";
    if (policyTypeArea.massExpulsion) formatted += "Mass Expulsion, ";
    if (policyTypeArea.preRemovalDetention) formatted += "Pre-Removal Detention, ";
    if (policyTypeArea.pushback) formatted += "Pushback, ";
    if (policyTypeArea.residence) formatted += "Residence, ";
    if (policyTypeArea.voluntaryReturn) formatted += "Voluntary Return, ";
    if (policyTypeArea.other) formatted += "Other, ";
    return formatted.trim().replace(/,$/, ""); // Remove trailing comma
  };

  return (
    <Document>
      <Page style={styles.page} orientation='landscape'>
        <View style={styles.table}>
          {/* Header Row */}
          <View style={styles.tableRow}>
            {headers?.map((header, indexHeader) => (
              <View key={indexHeader} style={[styles.tableCell, styles.headerCell]}>
                <Text style={styles.header}>{header?.label}</Text>
              </View>
            ))}
          </View>

          {/* Data Rows */}
          {policies.map((policy, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{policy.country}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{policy.policyName}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={policy.country === "Greece" ? [styles.cellText, styles.greek] : styles.cellText}>{policy.originalPolicyName}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{`${policy.day}/${policy.month}/${policy.year}`}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{policy.typeOfLegislation}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{policy.levelOfLegislation}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{formatPolicyTypeArea(policy.policyTypeArea)}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{policy.policyDescription}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{policy.notes}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ReportPDF;
