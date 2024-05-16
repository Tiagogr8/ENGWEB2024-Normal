import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    data = []
    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            row['_id'] = row.pop('idcontrato')
            data.append(row)

    with open(json_file_path, 'w', encoding='utf-8') as jsonfile:
        json.dump(data, jsonfile, ensure_ascii=False, indent=4)

csv_to_json('contratos2024.csv', 'contratos2024.json')
